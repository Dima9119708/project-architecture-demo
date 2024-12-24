import { useQueryClient } from '@tanstack/react-query'

import { api } from '@/shared/config/api/config'

const boardQueryKey = 'board'

export const boardByIdQuery = (id: string) => ({
    queryKey: [boardQueryKey, 'byId', id],
    queryFn: () => api.getBoard(id),
})

export const useInvalidateBoardById = () => {
    const queryClient = useQueryClient()

    return (id: string) => queryClient.invalidateQueries(boardByIdQuery(id))
}

export const useGetQueryKeyBoardById = () => (boardId: string) => boardByIdQuery(boardId).queryKey
