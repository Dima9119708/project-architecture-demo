import { useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Badge } from '@/shared/ui/badge'

const TasksCountNotification = () => {
    const count = useRef(0)

    const { data } = useQuery({
        queryKey: ['tasks-count'],
        queryFn: () => ++count.current,
        refetchInterval: 10000,
    })

    return <Badge variant="default">{data}</Badge>
}

export default TasksCountNotification
