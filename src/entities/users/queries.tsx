import { api } from '@/shared/config/api/config.ts'

const usersQueryKey = 'users'

export const usersQuery = () => ({
    queryKey: [usersQueryKey],
    queryFn: () => api.getUsers(),
})
