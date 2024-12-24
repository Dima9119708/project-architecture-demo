import { useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'

import { useInvalidateManageBoards } from '@/entities/manage-boards'

import { api } from '@/shared/config/api/config'

import { useFormManageBoardContext } from '../model/form-manage-board-context'
import { TFormManageBoardCreate, TFormManageBoardUpdate } from './form-manage-board-types'
import { useMutation, useQuery } from '@tanstack/react-query'

export const useFormManageBoard = () => {
    const boardId = useFormManageBoardContext()
    const closeButtonRef = useRef<HTMLButtonElement>(null)
    const invalidateManageBoards = useInvalidateManageBoards()

    const isBoardId = !!boardId

    const createMutation = useMutation({
        mutationFn: (data: TFormManageBoardCreate) => api.createBoard(data),
        onSuccess: async () => {
            await invalidateManageBoards()
            closeButtonRef.current?.click()
        },
    })

    const updateMutation = useMutation({
        mutationFn: (data: TFormManageBoardUpdate) =>
            api.updateBoard({
                id: boardId,
                ...data,
            }),
        onSuccess: async () => {
            await invalidateManageBoards()
            closeButtonRef.current?.click()
        },
    })

    const { data, isPending } = useQuery<TFormManageBoardUpdate>({
        queryKey: ['manage-board', boardId],
        queryFn: async () => {
            const boardData = await api.getBoard(boardId)

            return {
                title: boardData.title,
                description: boardData.description ?? '',
                columns: boardData.columns,
                project_access: boardData.project_access,
                board_access: boardData.board_access,
            }
        },
        gcTime: 0,
        enabled: isBoardId,
    })

    const methodsForm = useForm<TFormManageBoardCreate | TFormManageBoardUpdate>({
        mode: 'onChange',
        defaultValues: {
            title: '',
            description: '',
            project_access: [{ user: undefined, role: undefined }],
            board_access: 'open',
            columns: [
                {
                    title: 'TODO',
                },
                {
                    title: 'IN PROGRESS',
                },
                {
                    title: 'DONE',
                },
            ],
        },
        values: data,
    })

    const onSubmit = useCallback(
        (data: TFormManageBoardCreate | TFormManageBoardUpdate) => {
            if (isBoardId) {
                updateMutation.mutate(data as TFormManageBoardUpdate)
            } else {
                createMutation.mutate(data)
            }
        },
        [createMutation, isBoardId, updateMutation]
    )

    return {
        methodsForm,
        isPending,
        onSubmit,
        closeButtonRef,
        isMutating: createMutation.isPending || updateMutation.isPending,
    }
}
