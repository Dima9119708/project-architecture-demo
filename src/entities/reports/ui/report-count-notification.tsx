import { useRef } from 'react'

import { useQuery } from '@tanstack/react-query'

import { Badge } from '@/shared/ui/badge'

const ReportCountNotification = () => {
    const count = useRef(0)

    const { data } = useQuery({
        queryKey: ['report-count'],
        queryFn: () => ++count.current,
        refetchInterval: 2000,
    })

    return <Badge variant="default">{data}</Badge>
}

export default ReportCountNotification
