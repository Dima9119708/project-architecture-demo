import React, { FC, PropsWithChildren, memo, useCallback } from 'react'
import { Link } from 'react-router-dom'

import { isMatchPath } from '@/shared/lib/is-match-path'
import { cn } from '@/shared/lib/utils.ts'
import { ItemConfig, LazyItemConfig } from '@/shared/ui/app-shell/header/lib/configure.ts'

export type RenderLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    configItem: Pick<ItemConfig, 'path'> & LazyItemConfig
) => void

export const RenderLink = memo(
    (props: {
        isCurrentPath: boolean
        path: string
        component?: LazyItemConfig['component']
        icon?: ItemConfig['icon']
        name?: ItemConfig['name']
        children?: ItemConfig['children']
        onClick?: RenderLinkClick
        className?: string
    }) => {
        const { onClick, name, path, isCurrentPath, icon, component, children } = props

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
            const CustomComponent = props.component

            return (
                <CustomComponent
                    isMatchPath={isMatchPath}
                    RouterLink={Link}
                    LinkContainer={LinkContainer}
                    itemConfig={{ path, name, children }}
                />
            )
        }

        return (
            <LinkContainer>
                {props.icon}
                <span>{props.name}</span>
            </LinkContainer>
        )
    }
)
