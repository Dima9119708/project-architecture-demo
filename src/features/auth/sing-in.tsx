import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { ROLES, Role } from '@/entities/manage-roles'
import { TUser } from '@/entities/users/model/types'
import { usersQuery } from '@/entities/users/queries'

import { EnumRoutes } from '@/shared/config/routes/routes'
import { ActionItems, NavigationItems } from '@/shared/ui/app-shell/header'

const NAVIGATION_ITEMS: Record<Role, NavigationItems> = {
    [ROLES.ADMIN]: [
        {
            path: EnumRoutes.MANAGE_BOARDS,
            children: [
                { path: EnumRoutes.BOARD },
                { path: EnumRoutes.MANAGE_DASHBOARD },
                { path: EnumRoutes.MANAGE_FILTERS },
                { path: EnumRoutes.MANAGE_ROLES },
                { path: EnumRoutes.MANAGE_TEAMS },
                { path: EnumRoutes.MANAGE_PLANS },
            ],
        },
        {
            path: EnumRoutes.USER_MANAGEMENT,
            children: [{ path: EnumRoutes.SYSTEM }],
        },
        {
            path: EnumRoutes.TASKS,
            children: [
                {
                    path: EnumRoutes.TASK,
                },
            ],
        },
        {
            path: EnumRoutes.REPORTS,
            children: [
                {
                    path: EnumRoutes.LOGS,
                },
            ],
        },
        {
            path: EnumRoutes.PROJECTS,
            children: [
                { path: EnumRoutes.PROJECT },
                {
                    path: EnumRoutes.INTEGRATIONS,
                },
            ],
        },
    ],
    [ROLES.USER]: [
        {
            path: EnumRoutes.BOARDS,
            children: [{ path: EnumRoutes.BOARD }],
        },
        {
            path: EnumRoutes.DASHBOARD,
        },
        {
            path: EnumRoutes.FILTERS,
        },
        {
            path: EnumRoutes.TEAM,
        },
        {
            path: EnumRoutes.PLANS,
        },
        {
            path: EnumRoutes.NOTIFICATIONS,
        },
        {
            path: EnumRoutes.CHAT,
        },
    ],
    [ROLES.MANAGER]: [
        {
            path: EnumRoutes.TASKS,
            children: [{ path: EnumRoutes.TASK }],
        },
        {
            path: EnumRoutes.REPORTS,
        },
        {
            path: EnumRoutes.PROJECTS,
            children: [{ path: EnumRoutes.PROJECT }],
        },
        {
            path: EnumRoutes.ANALYTICS,
        },
    ],
    [ROLES.GUEST]: [
        {
            path: EnumRoutes.BOARDS,
            children: [{ path: EnumRoutes.BOARD }],
        },
        {
            path: EnumRoutes.DASHBOARD,
        },
        {
            path: EnumRoutes.NOTIFICATIONS,
        },
    ],
    [ROLES.DEVELOPER]: [
        {
            path: EnumRoutes.TASKS,
            children: [{ path: EnumRoutes.TASK }],
        },
        {
            path: EnumRoutes.SETTINGS,
        },
        {
            path: EnumRoutes.REPORTS,
        },
    ],
}

const ACTION_ITEMS: Record<Role, ActionItems> = {
    [ROLES.ADMIN]: [{ path: 'notifications' }, { path: 'help' }, { path: 'admin-profile' }, { path: 'admin-settings' }],
    [ROLES.USER]: [{ path: 'notifications' }, { path: 'help' }, { path: 'user-profile' }],
    [ROLES.MANAGER]: [{ path: 'notifications' }, { path: 'help' }, { path: 'manager-profile' }, { path: 'analytics' }],
    [ROLES.GUEST]: [{ path: 'notifications' }, { path: 'help' }, { path: 'guest-profile' }],
    [ROLES.DEVELOPER]: [{ path: 'notifications' }, { path: 'help' }, { path: 'developer-profile' }, { path: 'developer-settings' }],
}

export const useSingInAs = () => {
    const [session, singInAs] = useState<TUser | null>(null)

    const query = useQuery({
        queryKey: ['sing-in', session],
        queryFn: usersQuery().queryFn,
        select: (data) => {
            if (session) return data.find((user) => user.id === session.id)
            return data[0]
        },
        placeholderData: keepPreviousData,
        gcTime: 0,
    })

    return {
        query,
        singInAs,
        location,
        navigationItems: NAVIGATION_ITEMS,
        actionItems: ACTION_ITEMS,
    }
}
