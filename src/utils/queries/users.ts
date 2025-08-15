import { api } from '@/apis/config'

const usersQueryKey = 'users'

export const usersQuery = () => ({
    queryKey: [usersQueryKey],
    queryFn: () => api.getUsers(),
})
