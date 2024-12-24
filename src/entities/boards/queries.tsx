import { useQueryClient } from '@tanstack/react-query'

import { api } from '@/shared/config/api/config'

import { useLimitState, useOffsetState, useSearchState } from './model/states-hooks.ts'

const boardsQueryKey = 'boards'

export const boardsQuery = (body?: { limit?: number; offset?: number; search?: string }) => ({
    queryKey: [boardsQueryKey, body?.limit, body?.offset, body?.search],
    queryFn: () => api.getBoards(body),
})

export const useInvalidateManageBoards = () => {
    const queryClient = useQueryClient()
    const [search] = useSearchState()
    const [offset] = useOffsetState()
    const [limit] = useLimitState()

    return () =>
        queryClient.invalidateQueries(
            boardsQuery({
                search: search ?? undefined,
                offset,
                limit: limit ?? undefined,
            })
        )
}
