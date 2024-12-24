import { useMutation } from '@tanstack/react-query'
import { Trash2 } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import { useInvalidateBoardById } from '@/entities/board'
import {
    useGetTaskByBoardIdFromCache,
    useInvalidateTaskByBoardId,
    useOptimisticRemoveTaskByBoardId,
    useSetTaskByBoardIdInCache,
} from '@/entities/task'

import { api } from '@/shared/config/api/config.ts'
import { Confirmation } from '@/shared/lib/confirmation.tsx'
import { Button } from '@/shared/ui/button.tsx'
import { Spinner } from '@/shared/ui/spinner.tsx'

interface RemoveColumnByBoardIdProps {
    className?: string
    boardId: string
    columnId: string
    itemId: string
}

const useRemoveTaskByBoardId = () => {
    const invalidateBoardById = useInvalidateBoardById()
    const invalidateTaskByBoardId = useInvalidateTaskByBoardId()

    const optimisticRemoveTaskByBoardId = useOptimisticRemoveTaskByBoardId()
    const getTaskByBoardIdFromCache = useGetTaskByBoardIdFromCache()
    const setTaskByBoardIdInCache = useSetTaskByBoardIdInCache()

    return useMutation({
        mutationFn: (variables: { boardId: string; columnId: string; itemId: string }) =>
            api.removeColumnItem(variables.boardId, variables.columnId, variables.itemId),
        onMutate: (variables) => {
            const oldData = getTaskByBoardIdFromCache(variables.boardId)

            optimisticRemoveTaskByBoardId(variables.boardId, variables.itemId)

            return oldData
        },
        onSuccess: async (_, variables) => {
            await Promise.all([invalidateBoardById(variables.boardId), invalidateTaskByBoardId(variables.boardId)])
        },
        onError: (_, variables, context) => {
            setTaskByBoardIdInCache(variables.boardId, context)
        },
    })
}

export const RemoveTaskByBoardById: FC<PropsWithChildren<RemoveColumnByBoardIdProps>> = (props) => {
    const { isPending, mutate } = useRemoveTaskByBoardId()

    return (
        <Confirmation
            title="Вы действительно хотите удалить задачу?"
            onConfirm={() => {
                mutate({
                    boardId: props.boardId,
                    columnId: props.columnId,
                    itemId: props.itemId,
                })
            }}
        >
            <Button
                className={props.className}
                size="icon"
                variant="secondary"
            >
                {isPending ? <Spinner /> : <Trash2 />}
            </Button>
        </Confirmation>
    )
}
