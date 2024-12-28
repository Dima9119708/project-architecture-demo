import { FC, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

import { ActionItems, NavigationAndActionItems, NavigationItems, Header as UIHeader } from '@/shared/ui/app-shell/header'

import { useHeaderConfig } from '../../config/use-header-config.tsx'

interface RoleRedirectProps {
    navigationItems: NavigationItems
    actionItems: ActionItems
}

const Header: FC<RoleRedirectProps> = (props) => {
    const { actionItems, navigationItems } = props
    const location = useLocation()
    const navigationAndActionItems = useMemo<NavigationAndActionItems>(() => [navigationItems, actionItems], [navigationItems, actionItems])

    const configureHeaderConfig = useHeaderConfig({
        navigationAndActionItems,
    })

    return (
        <UIHeader
            config={configureHeaderConfig}
            currentPath={location.pathname}
        />
    )
}

export default Header
