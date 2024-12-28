import { Ellipsis } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import { isMatchPath } from '@/shared/lib/is-match-path.ts'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

import { ItemConfig } from '../lib/configure'
import { isPathInTreeWithMatch } from '../lib/is-path-in-tree-with-match'
import { IntersectionObserverItem } from './intersection-observer-item'
import { RenderLazyDropdown } from './render-lazy-dropdown'
import { RenderLazyElement } from './render-lazy-element'
import { RenderLink } from './render-link'

export const RenderNavigationItems = (props: { config: ItemConfig[]; className?: string; currentPath: string }) => {
    const [hiddenItems, setHiddenItems] = useState<ItemConfig[]>([])

    const initialConfig = props.config
    const currentPath = props.currentPath

    const isHiddenActivePath = useMemo(() => {
        return isPathInTreeWithMatch(hiddenItems, currentPath)
    }, [currentPath, hiddenItems])

    const onView = useCallback(
        (path: string, isVisible: boolean) => {
            setHiddenItems((prevHiddenItems) => {
                const item = initialConfig.find((configItem) => configItem.path === path)

                if (!item) return prevHiddenItems

                if (!isVisible && !prevHiddenItems.some((hiddenItem) => hiddenItem.path === path)) {
                    return [...prevHiddenItems, item]
                }

                if (isVisible) {
                    return prevHiddenItems.filter((hiddenItem) => hiddenItem.path !== path)
                }

                return prevHiddenItems
            })
        },
        [initialConfig]
    )

    const renderConfigItem = useCallback(
        (configItem: ItemConfig & { enableObserver?: boolean }) => {
            const isActivePath = isMatchPath(configItem.path, currentPath)
            const enableObserver = configItem.enableObserver ?? true

            return (
                <ErrorBoundary
                    key={configItem.path}
                    fallback={configItem.errorFallback}
                >
                    <IntersectionObserverItem
                        className="flex-shrink-0"
                        path={configItem.path}
                        onView={onView}
                        enabled={enableObserver}
                    >
                        {Array.isArray(configItem.children) && configItem.children.length ? (
                            <RenderLazyDropdown
                                {...configItem}
                                currentPath={currentPath}
                            />
                        ) : configItem.lazy ? (
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
                    </IntersectionObserverItem>
                </ErrorBoundary>
            )
        },
        [onView, currentPath]
    )

    return (
        <>
            <div className={props.className}>{props.config.map(renderConfigItem)}</div>
            {!!hiddenItems.length && (
                <div className="sticky top-0 right-0">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                size="icon"
                                variant="outline"
                                className={cn({
                                    'border-primary': isHiddenActivePath,
                                    'border-2': isHiddenActivePath,
                                })}
                            >
                                <Ellipsis className="h-[1rem w-[1rem]" />
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-2 w-[max-content] bg-background flex flex-col gap-2">
                            {hiddenItems.map((hiddenItem) =>
                                renderConfigItem({
                                    ...hiddenItem,
                                    enableObserver: false,
                                })
                            )}
                        </PopoverContent>
                    </Popover>
                </div>
            )}
        </>
    )
}
