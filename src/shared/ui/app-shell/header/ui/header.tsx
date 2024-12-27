import { FC, memo } from 'react'

import { NavigationAndActionItems } from '../lib/configure.ts'
import RenderItems from './render-items.tsx'

export const Header: FC<{ config: NavigationAndActionItems; currentPath: string }> = memo(({ config, currentPath }) => {
    return (
        <header className="flex items-center justify-between bg-background p-2 px-4 rounded-md">
            <div className="flex items-center gap-8  overflow-hidden">
                <h1 className="text-2xl font-bold">Logo</h1>

                <RenderItems
                    className="flex items-center gap-3"
                    config={config[0]}
                    currentPath={currentPath}
                />
            </div>

            <RenderItems
                className="flex items-center gap-3"
                config={config[1]}
                currentPath={currentPath}
            />
        </header>
    )
})
