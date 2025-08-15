import { produce } from 'immer'
import { Trash2 } from 'lucide-react'
import { FC, PropsWithChildren } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useGetQueryKeyBoardById, useInvalidateBoardById } from '@/utils/queries/board'

import { TBoard } from '@/entities/board'

import { Confirmation } from '@/components/containers/confirmation/confirmation'
import { useSessionContext } from '@/components/providers/session-provider'
import { Button } from '@/components/ui/button'

import { api } from '@/apis/config'

interface RemoveColumnProps {
    className?: string
    boardId: string
    columnId: string
}

const useRemoveColumn = () => {
    const invalidateBoardById = useInvalidateBoardById()
    const queryClient = useQueryClient()
    const getQueryKeyBoardById = useGetQueryKeyBoardById()

    return useMutation({
        mutationFn: (variables: { boardId: string; columnId: string }) => api.removeColumn(variables.boardId, variables.columnId),
        onMutate: (variables) => {
            const board = queryClient.getQueryData<TBoard>(getQueryKeyBoardById(variables.boardId))

            queryClient.setQueryData<TBoard>(getQueryKeyBoardById(variables.boardId), (old) => {
                return produce(old, (draft) => {
                    if (draft) {
                        draft.columns = draft.columns.filter((column) => column.id !== variables.columnId)
                    }
                })
            })

            return board
        },
        onSuccess: (_, variables) => invalidateBoardById(variables.boardId),
        onError: (_, variables, context) => {
            queryClient.setQueryData<TBoard>(getQueryKeyBoardById(variables.boardId), context)
        },
    })
}

export const RemoveColumn: FC<PropsWithChildren<RemoveColumnProps>> = (props) => {
    const { mutate } = useRemoveColumn()
    const session = useSessionContext()

    if (!session) return

    if (session.role !== 'admin') return

    return (
        <Confirmation
            title="Вы действительно хотите удалить колонку?"
            onConfirm={() => {
                mutate({
                    boardId: props.boardId,
                    columnId: props.columnId,
                })
            }}
        >
            <Button
                size="icon"
                className={props.className}
            >
                <Trash2 />
            </Button>
        </Confirmation>
    )
}
