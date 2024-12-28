import { useQueryClient } from '@tanstack/react-query'

import { api } from '@/shared/config/api/config'

import { useLimitState, useOffsetState, useSearchState } from './model/states-hooks.ts'

const boardsQueryKey = 'manage-boards'

export const manageBoardsQuery = (body?: { limit?: number; offset?: number; search?: string }) => ({
    queryKey: [boardsQueryKey, body],
    queryFn: () => api.getBoards(body),
})

export const useInvalidateManageBoards = () => {
    const queryClient = useQueryClient()
    const [search] = useSearchState()
    const [offset] = useOffsetState()
    const [limit] = useLimitState()

    return () =>
        queryClient.invalidateQueries(
            manageBoardsQuery({
                search: search ?? undefined,
                offset,
                limit: limit ?? undefined,
            })
        )
}
