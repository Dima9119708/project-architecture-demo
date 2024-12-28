import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useCallback, useLayoutEffect, useRef, useState } from 'react'

import { isMatchPath } from '@/shared/lib/is-match-path.ts'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover.tsx'

import { ItemConfig, LazyItemConfig } from '../lib/configure.ts'
import { RenderLink } from './render-link.tsx'

export const RenderLazyDropdown = (configItemProps: { currentPath: string } & ItemConfig) => {
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

    const isActivePath = isMatchPath(activeElement.path, configItemProps.currentPath)

    const onOpenPopover = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.stopPropagation()
        event.preventDefault()

        setIsOpen((prevState) => !prevState)
    }, [])

    const onClickDropdownItem = useCallback(() => {
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

    useLayoutEffect(() => {
        lazyData.forEach((configItem) => {
            if (isMatchPath(configItem.path, configItemProps.currentPath)) {
                setActiveElement(configItem)
                return
            }
        })
    }, [configItemProps.currentPath, lazyData])

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
                    <div className="flex items-center gap-1">
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
                        const isActivePathChildren = isMatchPath(configItem.path, configItemProps.currentPath)

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
