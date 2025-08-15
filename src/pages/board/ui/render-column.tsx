import { ReactNode, memo } from 'react'

import { TTask } from '@/entities/task'

import Column from './column'
import ColumnTitle from './column-title'
import { CreateTaskByBoardById } from './create-task-by-board-by-id'
import { RemoveColumn } from './remove-column'
import { RenderTask } from './render-task'

export const RenderColumn = memo((props: { title: string; columnId: string; items: TTask[]; boardId: string; children?: ReactNode }) => {
    const { title, columnId, items, boardId, children } = props

    return (
        <Column>
            <ColumnTitle className="mb-5 flex justify-between">
                <div className="flex items-center gap-3">
                    {children}
                    {title}
                </div>

                <RemoveColumn
                    boardId={boardId}
                    columnId={columnId}
                />
            </ColumnTitle>
            {items.map(({ id, title }) => (
                <RenderTask
                    title={title}
                    columnId={columnId}
                    boardId={boardId}
                    itemId={id}
                    key={id}
                />
            ))}

            <CreateTaskByBoardById
                boardId={boardId}
                columnId={columnId}
                className="w-full"
            />
        </Column>
    )
})
