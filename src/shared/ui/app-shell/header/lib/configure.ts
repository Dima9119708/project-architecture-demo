import { FC, PropsWithChildren, ReactNode } from 'react'
import { Link, matchPath } from 'react-router-dom'

export interface LazyItemConfig {
    component?: (options: {
        matchPath: typeof matchPath
        RouterLink: typeof Link
        LinkContainer: FC<PropsWithChildren<{ className?: string }>>
    }) => ReactNode
    name?: string
    icon?: ReactNode
}

export interface ItemConfig {
    path: string
    name?: string
    icon?: ReactNode
    show?: boolean
    fallback?: ReactNode
    errorFallback?: ReactNode
    lazy?: () => Promise<LazyItemConfig>
    children?: ItemConfig[]
}

export type NavigationItems = ItemConfig[]
export type ActionItems = ItemConfig[]

export type NavigationAndActionItems = [NavigationItems, ActionItems]

export const mergeNavigationAndReturnActionItems = (
    basicConfig: [NavigationItems, ActionItems],
    mergeConfig: Record<string, Partial<Omit<ItemConfig, 'children'>>>
): NavigationAndActionItems => {
    const recursiveMerge = (config: NavigationItems): NavigationItems => {
        return config.map((item) => {
            const mergeItem = mergeConfig[item.path]

            const updatedItem = mergeItem ? { ...item, ...mergeItem } : { ...item }

            if (Array.isArray(updatedItem.children)) {
                updatedItem.children = updatedItem.children.filter((child) => !/:.*?/.test(child.path))

                updatedItem.children = recursiveMerge(updatedItem.children)
            }

            return updatedItem
        })
    }

    return [recursiveMerge(basicConfig[0]), basicConfig[1]]
}
