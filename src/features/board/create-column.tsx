import generate from 'boring-name-generator'
import { produce } from 'immer'
import { nanoid } from 'nanoid'
import { FC, PropsWithChildren } from 'react'

import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TBoard, useGetQueryKeyBoardById, useInvalidateBoardById } from '@/entities/board'

import { api } from '@/shared/config/api/config'
import { Button } from '@/shared/ui/button'

interface CreateColumnProps {
    className?: string
    boardId: string
}

const useCreateColumn = () => {
    const invalidateBoardById = useInvalidateBoardById()
    const getQueryKeyBoardById = useGetQueryKeyBoardById()
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (variables: { boardId: string; title: string }) => api.createColumn(variables.boardId, variables.title),
        onMutate: (variables) => {
            const board = queryClient.getQueryData<TBoard>(getQueryKeyBoardById(variables.boardId))

            if (board) {
                queryClient.setQueryData<TBoard>(getQueryKeyBoardById(variables.boardId), (old) => {
                    return produce(old, (draft) => {
                        if (draft) {
                            draft.columns.push({
                                items: [],
                                title: variables.title,
                                id: nanoid(),
                            })
                        }
                    })
                })
            }

            return board
        },
        onSuccess: (_, variables) => invalidateBoardById(variables.boardId),
        onError: (_, variables, context) => {
            queryClient.setQueryData<TBoard>(getQueryKeyBoardById(variables.boardId), context)
        },
    })
}

export const CreateColumn: FC<PropsWithChildren<CreateColumnProps>> = (props) => {
    const { mutate } = useCreateColumn()

    return (
        <Button
            className={props.className}
            onClick={() =>
                mutate({
                    boardId: props.boardId,
                    title: generate().spaced,
                })
            }
        >
            Create column
        </Button>
    )
}
