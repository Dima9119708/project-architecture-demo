import { useLayoutEffect, useState } from 'react'
import { matchPath, useNavigate } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { TUser } from '@/entities/users/model/types'
import { usersQuery } from '@/entities/users/queries'

import { EnumRoutes } from '@/shared/config/routes/routes'

const STARTING_ROUTE_BY_ROLE = {
    admin: EnumRoutes.MANAGE_BOARDS,
    user: EnumRoutes.BOARDS,
}

const PAGE_ACCESS = {
    admin: [EnumRoutes.MANAGE_BOARDS, EnumRoutes.BOARD],
    user: [EnumRoutes.BOARDS, EnumRoutes.BOARD],
}

export const useSingInAs = () => {
    const [session, singInAs] = useState<TUser | null>(null)
    const navigate = useNavigate()

    const query = useQuery({
        queryKey: ['sing-in', session],
        queryFn: usersQuery().queryFn,
        select: (data) => {
            if (session) return data.find((user) => user.id === session.id)
            return data[0]
        },
        gcTime: 0,
    })

    useLayoutEffect(() => {
        if (!query.data) return

        switch (query.data.role) {
            case 'admin':
                if (!PAGE_ACCESS.admin.some((route) => matchPath(route, window.location.pathname))) {
                    navigate(STARTING_ROUTE_BY_ROLE.admin)
                }

                break
            case 'user':
                if (!PAGE_ACCESS.user.some((route) => matchPath(route, window.location.pathname))) {
                    navigate(STARTING_ROUTE_BY_ROLE.user)
                }

                break
        }
    }, [navigate, query.data])

    return {
        query,
        singInAs,
    }
}
