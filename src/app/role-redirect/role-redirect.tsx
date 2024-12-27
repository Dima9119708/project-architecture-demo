import { useLayoutEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { NavigationItems, isPathInTreeWithMatch } from '@/shared/ui/app-shell/header'

interface RoleRedirectProps {
    role: string
    navigationItems: Record<'user' | 'admin' | string, NavigationItems>
}

const RoleRedirect = (props: RoleRedirectProps) => {
    const { role, navigationItems } = props
    const navigate = useNavigate()
    const location = useLocation()

    useLayoutEffect(() => {
        if (!role) return

        switch (role) {
            case 'admin':
                if (!isPathInTreeWithMatch(navigationItems.admin, location.pathname)) {
                    navigate(navigationItems.admin[0].path)
                }

                break
            case 'user':
                if (!isPathInTreeWithMatch(navigationItems.user, location.pathname)) {
                    navigate(navigationItems.user[0].path)
                }

                break
        }
    }, [role, navigationItems, location.pathname, navigate])

    return null
}

export default RoleRedirect
