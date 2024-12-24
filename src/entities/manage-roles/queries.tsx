import { api } from '@/shared/config/api/config.ts'

const manageRolesQueryKey = 'manage-roles'

export const manageRolesQuery = () => ({
    queryKey: [manageRolesQueryKey],
    queryFn: () => api.getManageRoles(),
})
