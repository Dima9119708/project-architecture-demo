import { Outlet } from 'react-router-dom'

import { useSingInAs } from '@/features/auth/sing-in.tsx'

import { SessionProvider } from '@/entities/session'
import { SelectUsers } from '@/entities/users'

import { Header } from '@/shared/ui/app-shell/header.tsx'
import { Spinner } from '@/shared/ui/spinner.tsx'

const AppInit = () => {
    const { query, singInAs } = useSingInAs()

    return (
        <SessionProvider value={query.data ?? null}>
            <div className="flex h-[100vh] flex-col bg-muted p-[2rem] gap-6">
                <Header>
                    <div className="flex items-center gap-3 flex-shrink-0">
                        <div className="flex-shrink-0">Sing in as</div>
                        <SelectUsers
                            className="w-[15rem] bg-white"
                            value={query.data}
                            onChange={singInAs}
                        />
                    </div>
                </Header>

                {!query.isLoading && <Outlet />}

                {query.isLoading && <Spinner overlay />}
            </div>
        </SessionProvider>
    )
}

export default AppInit
