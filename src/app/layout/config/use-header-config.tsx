import { useMemo } from 'react'

import { EnumRoutes } from '@/shared/config/routes/routes'
import { NavigationAndActionItems, mergeNavigationAndReturnActionItems } from '@/shared/ui/app-shell/header'

export const useHeaderConfig = (props: { navigationAndActionItems: NavigationAndActionItems }) => {
    const { navigationAndActionItems } = props

    return useMemo(
        () =>
            mergeNavigationAndReturnActionItems(navigationAndActionItems, {
                [EnumRoutes.MANAGE_BOARDS]: {
                    lazy: async () => {
                        const { Airplay } = await import('lucide-react')

                        return {
                            icon: <Airplay />,
                            name: 'Manage boards',
                        }
                    },
                },
                [EnumRoutes.MANAGE_DASHBOARD]: {
                    lazy: async () => {
                        const { LayoutDashboardIcon } = await import('lucide-react')

                        return {
                            icon: <LayoutDashboardIcon />,
                            name: 'Manage dashboard',
                        }
                    },
                },
                [EnumRoutes.MANAGE_FILTERS]: {
                    lazy: async () => {
                        const { Filter } = await import('lucide-react')

                        return {
                            icon: <Filter />,
                            name: 'Manage filters',
                        }
                    },
                },
                [EnumRoutes.MANAGE_ROLES]: {
                    lazy: async () => {
                        const { Users2 } = await import('lucide-react')

                        return {
                            icon: <Users2 />,
                            name: 'Manage roles',
                        }
                    },
                },
                [EnumRoutes.MANAGE_PLANS]: {
                    lazy: async () => {
                        const { Airplay } = await import('lucide-react')

                        return {
                            icon: <Airplay />,
                            name: 'Manage plans',
                        }
                    },
                },
                [EnumRoutes.MANAGE_TEAMS]: {
                    lazy: async () => {
                        const { PersonStanding } = await import('lucide-react')

                        return {
                            icon: <PersonStanding />,
                            name: 'Manage teams',
                        }
                    },
                },
                [EnumRoutes.SYSTEM]: {
                    lazy: async () => {
                        const { MonitorCog } = await import('lucide-react')

                        return {
                            icon: <MonitorCog />,
                            name: 'System',
                        }
                    },
                },
                [EnumRoutes.USER_MANAGEMENT]: {
                    lazy: async () => {
                        const { HandPlatter } = await import('lucide-react')

                        return {
                            icon: <HandPlatter />,
                            name: 'User management',
                        }
                    },
                },
                [EnumRoutes.BILLING]: {
                    lazy: async () => {
                        const { ScrollText } = await import('lucide-react')

                        return {
                            icon: <ScrollText />,
                            name: 'Billing',
                        }
                    },
                },
                [EnumRoutes.BOARDS]: {
                    lazy: async () => {
                        const { Columns3 } = await import('lucide-react')

                        return {
                            icon: <Columns3 />,
                            name: 'Boards',
                        }
                    },
                },
                [EnumRoutes.DASHBOARD]: {
                    lazy: async () => {
                        const { LayoutDashboard } = await import('lucide-react')

                        return {
                            icon: <LayoutDashboard />,
                            name: 'Dashboard',
                        }
                    },
                },
                [EnumRoutes.FILTERS]: {
                    lazy: async () => {
                        const { SlidersHorizontal } = await import('lucide-react')

                        return {
                            icon: <SlidersHorizontal />,
                            name: 'Filters',
                        }
                    },
                },
                [EnumRoutes.TEAM]: {
                    lazy: async () => {
                        const { Users } = await import('lucide-react')

                        return {
                            icon: <Users />,
                            name: 'Team',
                        }
                    },
                },
                [EnumRoutes.PLANS]: {
                    lazy: async () => {
                        const { Scroll } = await import('lucide-react')

                        return {
                            icon: <Scroll />,
                            name: 'Plans',
                        }
                    },
                },
                [EnumRoutes.REPORTS]: {
                    lazy: async () => {
                        const { Eye } = await import('lucide-react')
                        const { ReportCountNotification } = await import('@/entities/reports')

                        return {
                            component: ({ LinkContainer }) => (
                                <LinkContainer>
                                    <Eye />
                                    Reports
                                    <ReportCountNotification />
                                </LinkContainer>
                            ),
                        }
                    },
                },
                [EnumRoutes.LOGS]: {
                    lazy: async () => {
                        const { Code } = await import('lucide-react')

                        return {
                            icon: <Code />,
                            name: 'Code',
                        }
                    },
                },
                [EnumRoutes.NOTIFICATIONS]: {
                    lazy: async () => {
                        const { Bell } = await import('lucide-react')

                        return {
                            component: ({ LinkContainer }) => {
                                return (
                                    <LinkContainer>
                                        <Bell />
                                        <span> Notifications</span>
                                        <div>5</div>
                                    </LinkContainer>
                                )
                            },
                        }
                    },
                },
                [EnumRoutes.PROJECTS]: {
                    lazy: async () => {
                        const { Folder } = await import('lucide-react')

                        return {
                            icon: <Folder />,
                            name: 'Projects',
                        }
                    },
                },
                [EnumRoutes.INTEGRATIONS]: {
                    lazy: async () => {
                        const { Plug } = await import('lucide-react')

                        return {
                            icon: <Plug />,
                            name: 'Integrations',
                        }
                    },
                },
                [EnumRoutes.TASKS]: {
                    lazy: async () => {
                        const { Briefcase } = await import('lucide-react')
                        const { TasksCountNotification } = await import('@/entities/task')

                        return {
                            icon: <Briefcase />,
                            name: 'Tasks',
                            component: ({ LinkContainer }) => (
                                <LinkContainer>
                                    <Briefcase />
                                    Tasks
                                    <TasksCountNotification />
                                </LinkContainer>
                            ),
                        }
                    },
                },
                [EnumRoutes.ADMIN_SETTINGS]: {
                    lazy: async () => {
                        const { Settings } = await import('lucide-react')

                        return {
                            icon: <Settings />,
                            name: 'Admin settings',
                        }
                    },
                },
                [EnumRoutes.HELP]: {
                    lazy: async () => {
                        const { CircleHelp } = await import('lucide-react')

                        return {
                            icon: <CircleHelp />,
                            name: 'Help',
                        }
                    },
                },
                ['profile']: {
                    lazy: async () => {
                        const { NavUser } = await import('../ui/nav-user/nav-user')

                        return {
                            component: ({ itemConfig }) => {
                                return <NavUser {...itemConfig} />
                            },
                        }
                    },
                },
            }),
        [navigationAndActionItems]
    )
}
