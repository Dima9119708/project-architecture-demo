import { useMemo } from 'react'
import { Outlet } from 'react-router-dom'

import { HEADER_CONFIG } from '@/config/header/header'
import { Role } from '@/config/roles/roles'

import Header from '@/components/containers/header/header'
import { mergeNavigationAndActionItems } from '@/components/containers/header/lib/configure'
import RoleRedirect from '@/components/containers/role-redirect/role-redirect'
import SelectUsersByRoles from '@/components/containers/select-users/select-users-by-roles'
import { useSingInAs } from '@/components/containers/sing-in/ui/sing-in'
import { SessionProvider } from '@/components/providers/session-provider'
import { Layout } from '@/components/ui/layout/layout'
import { Spinner } from '@/components/ui/spinner'

const AppInit = () => {
    const { query, singInAs, navigationItems, actionItems } = useSingInAs()

    const role = (query.data?.role ?? '') as Role

    const configureHeaderConfig = useMemo(
        () => mergeNavigationAndActionItems([navigationItems[role] ?? [], actionItems[role] ?? []], HEADER_CONFIG),
        [navigationItems[role], actionItems[role]]
    )

    if (query.isLoading) {
        return <Spinner overlay />
    }

    return (
        <SessionProvider value={query.data ?? null}>
            <Layout>
                <div className="flex justify-end items-center gap-2">
                    Sing in as
                    <SelectUsersByRoles
                        className="w-[15rem] bg-background"
                        value={query.data}
                        onChange={singInAs}
                    />
                </div>

                <RoleRedirect
                    role={role}
                    navigationItems={navigationItems}
                    actionItems={actionItems}
                />

                <Header configureHeaderConfig={configureHeaderConfig} />

                {!query.isLoading && <Outlet />}

                {query.isLoading && <Spinner overlay />}
            </Layout>
        </SessionProvider>
    )
}

export default AppInit
