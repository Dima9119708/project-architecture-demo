import { useState } from 'react'

import { keepPreviousData, useQuery } from '@tanstack/react-query'

import { TUser } from '@/entities/users/model/types'
import { usersQuery } from '@/entities/users/queries'

import { ACTION_ITEMS, NAVIGATION_ITEMS } from '../config/role-сonfig'

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
