import { FC, memo } from 'react'

import { RenderActionItems } from '@/shared/ui/app-shell/header/ui/render-action-items'
import { RenderNavigationItems } from '@/shared/ui/app-shell/header/ui/render-navigation-items'

import { NavigationAndActionItems } from '../lib/configure.ts'

export const Header: FC<{ config: NavigationAndActionItems; currentPath: string }> = memo(({ config, currentPath }) => {
    return (
        <header className="flex items-center justify-between gap-6 bg-background p-2 px-4 rounded-md">
            <div className="flex items-center flex-1 overflow-hidden">
                <h1 className="text-2xl mr-5 font-bold">Logo</h1>

                <RenderNavigationItems
                    className="flex items-center gap-3 flex-1 overflow-hidden"
                    config={config[0]}
                    currentPath={currentPath}
                />
            </div>

            <RenderActionItems
                className="flex items-center gap-3"
                config={config[1]}
                currentPath={currentPath}
            />
        </header>
    )
})
