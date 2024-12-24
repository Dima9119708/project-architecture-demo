import { produce } from 'immer'
import { FC, FunctionComponent, PropsWithChildren, ReactNode, useState } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TBoard, TColumn, useGetQueryKeyBoardById, useInvalidateBoardById } from '@/entities/board'

import { api } from '@/shared/config/api/config.ts'
import { DNDSortable } from '@/shared/lib/dnd-sortable.tsx'
import { cn } from '@/shared/lib/utils.ts'

import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
    MeasuringConfiguration,
    MeasuringStrategy,
    closestCenter,
} from '@dnd-kit/core'
import { SortableContext, SortableContextProps, arrayMove, useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

const measuring: MeasuringConfiguration = {
    droppable: {
        strategy: MeasuringStrategy.Always,
    },
}

const useDragAndDropColumn = (boardId: string) => {
    const [draggedColumn, setDraggedColumn] = useState<TColumn<{ id: string }[]> | null>(null)
    const invalidateBoardById = useInvalidateBoardById()
    const getQueryKeyBoardById = useGetQueryKeyBoardById()
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationFn: (variables: { oldColumnId: string; newColumnId: string }) =>
            api.moveColumn(boardId, variables.oldColumnId, variables.newColumnId),
        onMutate: (variables) => {
            const board = queryClient.getQueryData<TBoard>(getQueryKeyBoardById(boardId))

            if (board) {
                const oldIndex = board.columns.findIndex((column) => column.id === variables.oldColumnId)
                const newIndex = board.columns.findIndex((column) => column.id === variables.newColumnId)

                queryClient.setQueryData<TBoard>(getQueryKeyBoardById(boardId), (old) => {
                    return produce(old, (draft) => {
                        if (draft) {
                            draft.columns = arrayMove(draft.columns, oldIndex, newIndex)
                        }
                    })
                })
            }

            return board
        },
        onSuccess: () => invalidateBoardById(boardId),
        onError: (_, _variables, context) => {
            queryClient.setQueryData<TBoard>(getQueryKeyBoardById(boardId), context)
        },
    })

    const onDragStart = (event: DragStartEvent) => {
        const board = queryClient.getQueryData<TBoard>(getQueryKeyBoardById(boardId))

        if (board) {
            const column = board.columns.find((column) => column.id === event.active.id)

            setDraggedColumn(column ? column : null)
        }
    }

    const onDragCancel = () => setDraggedColumn(null)

    const onDragEnd = (event: DragEndEvent) => {
        if (event.over !== null && event.active.id !== event.over.id) {
            mutate({
                oldColumnId: event.active.id as string,
                newColumnId: event.over!.id as string,
            })
        }

        setDraggedColumn(null)
    }

    return {
        draggedColumn,
        onDragStart,
        onDragCancel,
        onDragEnd,
    }
}

export const ColumnDnDContext: FC<
    PropsWithChildren<{
        boardId: string
        items: SortableContextProps['items']
        renderDragOverlayContent: (dragColumn: TColumn<{ id: string }[]> | null) => ReactNode
    }>
> = (props) => {
    const { onDragEnd, onDragStart, onDragCancel, draggedColumn } = useDragAndDropColumn(props.boardId)

    return (
        <DndContext
            onDragStart={onDragStart}
            onDragCancel={onDragCancel}
            onDragEnd={onDragEnd}
            measuring={measuring}
            collisionDetection={closestCenter}
        >
            <SortableContext items={props.items}>{props.children}</SortableContext>

            <DragOverlay dropAnimation={null}>{props.renderDragOverlayContent(draggedColumn)}</DragOverlay>
        </DndContext>
    )
}

export const SortableColumn: FC<{ id: string; children: FunctionComponent<ReturnType<typeof useSortable>> }> = (props) => {
    const { id, children } = props

    return (
        <DNDSortable id={id}>
            {(sortableProps) => {
                return (
                    <div
                        className={cn('relative basis-[20rem] flex-shrink-0', {
                            'opacity-50': sortableProps.isDragging,
                            'before:content-[""] before:absolute before:top-0 before:bottom-0 before:w-1 before:bg-primary before:left-[calc(100%_+_16px)] before:z-20':
                                sortableProps.over?.id === id,
                        })}
                        ref={sortableProps.setDroppableNodeRef}
                        style={{
                            transition: sortableProps.transition,
                            transform: sortableProps.active ? undefined : CSS.Translate.toString(sortableProps.transform),
                        }}
                    >
                        {children(sortableProps)}
                    </div>
                )
            }}
        </DNDSortable>
    )
}
