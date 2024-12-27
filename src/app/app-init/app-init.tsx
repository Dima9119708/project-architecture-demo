import { Outlet } from 'react-router-dom'

import { Header, Layout } from '@/app/layout'
import RoleRedirect from '@/app/role-redirect/role-redirect'

import { useSingInAs } from '@/features/auth/sing-in'

import { Role } from '@/entities/manage-roles'
import { SessionProvider } from '@/entities/session'
import { SelectUsers } from '@/entities/users'

import { Spinner } from '@/shared/ui/spinner'

const AppInit = () => {
    const { query, singInAs, navigationItems, actionItems } = useSingInAs()

    const role = (query.data?.role ?? '') as Role

    if (query.isLoading) {
        return <Spinner overlay />
    }

    return (
        <SessionProvider value={query.data ?? null}>
            <Layout>
                <div className="flex justify-end items-center gap-2">
                    Sing in as
                    <SelectUsers
                        className="w-[15rem] bg-background"
                        value={query.data}
                        onChange={singInAs}
                    />
                </div>

                <RoleRedirect
                    role={role}
                    navigationItems={navigationItems}
                />

                <Header
                    navigationItems={navigationItems[role] ?? []}
                    actionItems={actionItems[role] ?? []}
                />

                {!query.isLoading && <Outlet />}

                {query.isLoading && <Spinner overlay />}
            </Layout>
        </SessionProvider>
    )
}

export default AppInit
