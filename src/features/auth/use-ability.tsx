import { useSessionContext } from '@/entities/session'

import { EnumRoutes } from '@/shared/config/routes/routes'

export const useAbility = () => {
    const session = useSessionContext()

    return {
        [EnumRoutes.BOARD]: (access: ['open' | 'private', string | undefined]) => {
            return {
                can: (action: 'create' | 'move' | 'update' | 'delete' | 'view' | 'move-task') => {
                    if (!session) return false

                    if (session.role === 'admin' && access[0] === 'open') return true
                    if (session.role === 'user' && access[0] === 'open') return false

                    if (access[0] === 'private' && access[1] === 'admin') return true
                    if (access[0] === 'private' && access[1] === 'view') return false
                    if (access[0] === 'private' && access[1] === 'member' && action === 'move-task') return true

                    return false
                },
            }
        },
    }
}
