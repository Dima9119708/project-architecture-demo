import { ErrorBoundary } from 'react-error-boundary'

import { isMatchPath } from '@/shared/lib/is-match-path.ts'

import { ItemConfig } from '../lib/configure.ts'
import { RenderLazyElement } from './render-lazy-element.tsx'
import { RenderLink } from './render-link.tsx'

export const RenderActionItems = (props: { config: ItemConfig[]; className?: string; currentPath: string }) => {
    return (
        <div className={props.className}>
            {props.config.map((configItem) => {
                const isActivePath = isMatchPath(configItem.path, props.currentPath)

                return (
                    <ErrorBoundary
                        key={configItem.path}
                        fallback={configItem.errorFallback}
                    >
                        {configItem.lazy ? (
                            <RenderLazyElement
                                isCurrentPath={isActivePath}
                                {...configItem}
                            />
                        ) : (
                            <RenderLink
                                {...configItem}
                                isCurrentPath={isActivePath}
                                path={configItem.path}
                            />
                        )}
                    </ErrorBoundary>
                )
            })}
        </div>
    )
}
