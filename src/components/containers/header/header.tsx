import { FC } from 'react'
import { useLocation } from 'react-router-dom'

import { NavigationAndActionItems } from './lib/configure'
import { RenderActionItems } from './ui/render-action-items'
import { RenderNavigationItems } from './ui/render-navigation-items'

interface RoleRedirectProps {
    configureHeaderConfig: NavigationAndActionItems
}

const Header: FC<RoleRedirectProps> = (props) => {
    const { configureHeaderConfig } = props
    const location = useLocation()

    return (
        <header className="flex items-center justify-between gap-6 bg-background p-2 px-4 rounded-md">
            <div className="flex items-center flex-1 overflow-hidden">
                <h1 className="text-2xl mr-5 font-bold">Logo</h1>

                <RenderNavigationItems
                    className="flex items-center gap-3 flex-1 overflow-hidden"
                    config={configureHeaderConfig[0]}
                    currentPath={location.pathname}
                />
            </div>

            <RenderActionItems
                className="flex items-center gap-3"
                config={configureHeaderConfig[1]}
                currentPath={location.pathname}
            />
        </header>
    )
}

export default Header
