import { useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

import { ActionItems, NavigationItems, isPathInTreeWithMatch } from '@/shared/ui/app-shell/header'

interface RoleRedirectProps {
    role: string
    navigationItems: Record<'user' | 'admin' | string, NavigationItems>
    actionItems: Record<'user' | 'admin' | string, ActionItems>
}

const RoleRedirect = (props: RoleRedirectProps) => {
    const { role, navigationItems, actionItems } = props
    const navigate = useNavigate()
    const location = useLocation()

    const prevRoleRef = useRef<string | null>(null)

    useLayoutEffect(() => {
        const prevRole = prevRoleRef.current
        prevRoleRef.current = role

        if (!role) return

        if (prevRole !== role) {
            const currentNavigationItems = navigationItems[role] || []
            if (currentNavigationItems.length > 0) {
                navigate(currentNavigationItems[0].path)
                return
            }
        }

        const currentNavigationItems = navigationItems[role] || []
        const currentActionItems = actionItems[role] || []

        if (!isPathInTreeWithMatch([...currentNavigationItems, ...currentActionItems], location.pathname)) {
            if (currentNavigationItems.length > 0) {
                navigate(currentNavigationItems[0].path)
            }
        }
    }, [role, navigationItems, actionItems, location.pathname, navigate])

    return null
}

export default RoleRedirect
