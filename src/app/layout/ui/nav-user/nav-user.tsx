import { BadgeCheck, Bell, CreditCard, LogOut, Sparkles, UserRoundCheck } from 'lucide-react'
import { ElementType, Fragment, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { EnumUserActions } from '@/app/layout/model/types.ts'

import { useSessionContext } from '@/entities/session'

import { EnumRoutes } from '@/shared/config/routes/routes.ts'
import { isMatchPath } from '@/shared/lib/is-match-path'
import { cn } from '@/shared/lib/utils.ts'
import { ItemConfig } from '@/shared/ui/app-shell/header'
import { Avatar, AvatarFallback } from '@/shared/ui/avatar'
import { AvatarImage } from '@/shared/ui/avatar.tsx'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'

const RenderDropdownItem = memo((item: { isActivePath: boolean; name: string; Icon: ElementType }) => {
    const { Icon } = item

    return (
        <DropdownMenuItem className={cn(item.isActivePath && 'bg-muted')}>
            {<Icon />}
            {item.name}
        </DropdownMenuItem>
    )
})

export const NavUser = (props: ItemConfig) => {
    const session = useSessionContext()
    const location = useLocation()

    const { children } = props

    if (!session) return

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type="button"
                    className="flex items-center gap-2 flex-shrink-0"
                >
                    <Avatar className="h-8 w-8 rounded-lg">
                        <AvatarImage
                            src={'https://github.com/shadcn.png'}
                            alt="@shadcn"
                        />
                        <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">{session.name}</span>
                        <span className="truncate text-xs">m@example.com</span>
                    </div>
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[max-content]">
                {children?.map((item) => {
                    return (
                        <Fragment key={item.path}>
                            <DropdownMenuGroup>
                                {item.children?.map((child) => {
                                    const isActivePath = isMatchPath(child.path, location.pathname)

                                    switch (child.path) {
                                        case EnumRoutes.UPGRADE_TO_PRO:
                                            return (
                                                <Link
                                                    key={child.path}
                                                    to={EnumRoutes.UPGRADE_TO_PRO}
                                                >
                                                    <RenderDropdownItem
                                                        isActivePath={isActivePath}
                                                        Icon={Sparkles}
                                                        name="Upgrade to pro"
                                                    />
                                                </Link>
                                            )
                                        case EnumRoutes.BILLING:
                                            return (
                                                <Link
                                                    key={child.path}
                                                    to={EnumRoutes.BILLING}
                                                >
                                                    <RenderDropdownItem
                                                        isActivePath={isActivePath}
                                                        Icon={CreditCard}
                                                        name="Billing"
                                                    />
                                                </Link>
                                            )
                                        case EnumUserActions.GUIDED_TOUR:
                                            return (
                                                <RenderDropdownItem
                                                    key={child.path}
                                                    isActivePath={isActivePath}
                                                    Icon={UserRoundCheck}
                                                    name="Guided tour"
                                                />
                                            )
                                        case EnumRoutes.ACCOUNT:
                                            return (
                                                <Link
                                                    key={child.path}
                                                    to={EnumRoutes.ACCOUNT}
                                                >
                                                    <RenderDropdownItem
                                                        isActivePath={isActivePath}
                                                        Icon={BadgeCheck}
                                                        name="Account"
                                                    />
                                                </Link>
                                            )
                                        case EnumRoutes.NOTIFICATIONS:
                                            return (
                                                <Link
                                                    key={child.path}
                                                    to={EnumRoutes.NOTIFICATIONS}
                                                >
                                                    <RenderDropdownItem
                                                        isActivePath={isActivePath}
                                                        Icon={Bell}
                                                        name="Notifications"
                                                    />
                                                </Link>
                                            )
                                        default: {
                                            return null
                                        }
                                    }
                                })}
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                        </Fragment>
                    )
                })}

                <DropdownMenuItem>
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
