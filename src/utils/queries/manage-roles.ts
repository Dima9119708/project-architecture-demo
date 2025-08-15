import { api } from '@/apis/config'

const manageRolesQueryKey = 'manage-roles'
export const manageRolesQuery = () => ({
    queryKey: [manageRolesQueryKey],
    queryFn: () => api.getManageRoles(),
})
