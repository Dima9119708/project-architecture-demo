import { ROLES, Role } from '@/entities/manage-roles'

import { EnumRoutes } from '@/shared/config/routes/routes.ts'
import { ActionItems, NavigationItems } from '@/shared/ui/app-shell/header'

export const NAVIGATION_ITEMS: Record<Role, NavigationItems> = {
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

const BASE_ACTION_ITEMS: ActionItems = [{ path: EnumRoutes.HELP }]

export const ACTION_ITEMS: Record<Role, ActionItems> = {
    [ROLES.ADMIN]: [
        ...BASE_ACTION_ITEMS,
        {
            path: 'profile',
            children: [
                {
                    path: 'group-1',
                    children: [{ path: EnumRoutes.ACCOUNT }, { path: EnumRoutes.BILLING }, { path: EnumRoutes.NOTIFICATIONS }],
                },
            ],
        },
    ],
    [ROLES.USER]: [
        ...BASE_ACTION_ITEMS,
        {
            path: 'profile',
            children: [
                { path: 'group-1', children: [{ path: EnumRoutes.UPGRADE_TO_PRO }] },
                {
                    path: 'group-2',
                    children: [{ path: 'guided-tour' }, { path: EnumRoutes.ACCOUNT }, { path: EnumRoutes.NOTIFICATIONS }],
                },
            ],
        },
    ],
    [ROLES.MANAGER]: [
        ...BASE_ACTION_ITEMS,
        {
            path: 'profile',
            children: [
                {
                    path: 'group-1',
                    children: [{ path: EnumRoutes.ACCOUNT }, { path: EnumRoutes.NOTIFICATIONS }],
                },
            ],
        },
    ],
    [ROLES.GUEST]: [
        ...BASE_ACTION_ITEMS,
        {
            path: 'profile',
            children: [
                {
                    path: 'group-1',
                    children: [{ path: EnumRoutes.ACCOUNT }, { path: EnumRoutes.NOTIFICATIONS }],
                },
            ],
        },
    ],
    [ROLES.DEVELOPER]: [
        ...BASE_ACTION_ITEMS,
        {
            path: 'profile',
            children: [
                {
                    path: 'group-1',
                    children: [{ path: EnumRoutes.ACCOUNT }, { path: EnumRoutes.NOTIFICATIONS }],
                },
            ],
        },
    ],
}
