import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { FC, PropsWithChildren, isValidElement, memo, useCallback, useLayoutEffect, useRef, useState } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Link, matchPath } from 'react-router-dom'

import { cn } from '@/shared/lib/utils.ts'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover'

import { ItemConfig, LazyItemConfig } from '../lib/configure.ts'

type RenderLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, configItem: Pick<ItemConfig, 'path'> & LazyItemConfig) => void

const RenderLink = memo(
    (props: {
        isCurrentPath: boolean
        path: string
        component?: LazyItemConfig['component']
        icon?: ItemConfig['icon']
        name?: ItemConfig['name']
        onClick?: RenderLinkClick
        className?: string
    }) => {
        const { onClick, name, path, isCurrentPath, icon, component } = props

        const propsClassName = props.className

        const LinkContainer: FC<PropsWithChildren<{ className?: string }>> = useCallback(
            ({ children, className }) => (
                <Link
                    to={path}
                    className={cn(
                        'flex items-center gap-1.5 [&_svg]:h-[1.25rem] [&_svg]:w-[1.25rem] text-base hover:underline',
                        { 'font-bold [&_svg]:stroke-[2.6]': props.isCurrentPath },
                        propsClassName,
                        className
                    )}
                    onClick={(event) => {
                        props.onClick?.(event, {
                            component: component,
                            icon: icon,
                            name: name,
                            path: path,
                        })
                    }}
                >
                    {children}
                </Link>
            ),
            [onClick, name, path, isCurrentPath, icon, component, propsClassName]
        )

        if (props.component) {
            const reactNode = props.component?.({ matchPath, RouterLink: Link, LinkContainer })

            return isValidElement(reactNode) && reactNode
        }

        return (
            <LinkContainer>
                {props.icon}
                <span>{props.name}</span>
            </LinkContainer>
        )
    }
)

const RenderLazyElement = memo(
    (props: { isCurrentPath: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void } & ItemConfig) => {
        const lazyFN = props.lazy

        const [isLoading, setLoading] = useState(() => !!props.lazy)
        const [lazyData, setLazyData] = useState<LazyItemConfig | null>(null)

        useLayoutEffect(() => {
            ;(async () => {
                const lazyData = await lazyFN?.()

                if (lazyData) {
                    setLazyData(lazyData)
                }

                setLoading(false)
            })()
        }, [lazyFN])

        if (isLoading) {
            return props.fallback
        }

        if (lazyData) {
            return (
                <RenderLink
                    {...lazyData}
                    name={lazyData.name ?? props.name}
                    isCurrentPath={props.isCurrentPath}
                    path={props.path}
                />
            )
        }
    }
)

const RenderLazyDropdown = (configItemProps: { currentPath: string } & ItemConfig) => {
    const activePathRef = useRef(configItemProps.currentPath)
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setLoading] = useState(
        () => configItemProps.lazy !== undefined || configItemProps.children?.some((item) => item.lazy !== undefined)
    )
    const [lazyData, setLazyData] = useState<(Pick<ItemConfig, 'path'> & LazyItemConfig)[]>([])

    const [activeElement, setActiveElement] = useState<Pick<ItemConfig, 'path'> & LazyItemConfig>(() => ({
        component: undefined,
        name: configItemProps.name,
        icon: configItemProps.icon,
        path: configItemProps.path,
    }))

    const isActivePath = matchPath(activeElement.path, configItemProps.currentPath) !== null

    const onOpenPopover = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation()
        event.preventDefault()

        setIsOpen((prevState) => !prevState)
    }, [])

    const onClickDropdownItem = useCallback<RenderLinkClick>((_, configItem) => {
        setActiveElement(configItem)
        setIsOpen(false)
    }, [])

    useLayoutEffect(() => {
        const newLazyData: (Pick<ItemConfig, 'path'> & LazyItemConfig)[] = []

        ;(async () => {
            for await (const configItem of [configItemProps, ...(configItemProps.children ?? [])]) {
                if (configItem.lazy === undefined) {
                    newLazyData.push({
                        component: undefined,
                        icon: configItem.icon,
                        name: configItem.name,
                        path: configItem.path,
                    })
                } else {
                    const lazyData = await configItem.lazy?.()
                    newLazyData.push({
                        component: lazyData.component,
                        icon: lazyData.icon ?? configItem.icon,
                        name: lazyData.name ?? configItem.name,
                        path: configItem.path,
                    })
                }
            }

            setLazyData(newLazyData)
            setActiveElement(newLazyData.find((item) => item.path === activePathRef.current) ?? newLazyData[0])
            setLoading(false)
        })()
    }, [configItemProps.lazy, configItemProps.name, configItemProps.path])

    if (isLoading) {
        return configItemProps.fallback
    }

    return (
        <>
            <Popover
                open={isOpen}
                onOpenChange={setIsOpen}
            >
                <PopoverTrigger asChild>
                    <div className="flex items-center gap-1 flex-shrink-0">
                        <RenderLink
                            {...activeElement}
                            className="hover:no-underline"
                            isCurrentPath={isActivePath}
                            onClick={onOpenPopover}
                        />
                        {isOpen ? <ChevronUp className="h-[1rem] w-[1rem]" /> : <ChevronDown className="h-[1rem] w-[1rem]" />}
                    </div>
                </PopoverTrigger>
                <PopoverContent className="p-2 w-[max-content] bg-background flex flex-col gap-2">
                    {lazyData.map((configItem) => {
                        const isActivePathChildren = matchPath(configItem.path, configItemProps.currentPath) !== null

                        return (
                            <RenderLink
                                key={configItem.path}
                                {...configItem}
                                isCurrentPath={isActivePathChildren}
                                onClick={onClickDropdownItem}
                            />
                        )
                    })}
                </PopoverContent>
            </Popover>
        </>
    )
}

function RenderItems(props: { config: ItemConfig[]; className?: string; currentPath: string }) {
    return (
        <div className={props.className}>
            {props.config.map((configItem) => {
                const isActivePath = matchPath(configItem.path, props.currentPath) !== null

                return (
                    <ErrorBoundary
                        key={configItem.path}
                        fallback={configItem.errorFallback}
                    >
                        {Array.isArray(configItem.children) && configItem.children.length !== 0 ? (
                            <RenderLazyDropdown
                                {...configItem}
                                currentPath={props.currentPath}
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
                    </ErrorBoundary>
                )
            })}
        </div>
    )
}

export default RenderItems
