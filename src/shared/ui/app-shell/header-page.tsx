import { ReactNode } from 'react'

import { cn } from '@/shared/lib/utils.ts'

interface HeaderPageProps {
    className?: string
    title: string
    leftComponents?: ReactNode[]
    rightComponents?: ReactNode[]
}

const HeaderPage = (props: HeaderPageProps) => {
    const { title, rightComponents, leftComponents } = props

    return (
        <div className={cn('flex justify-between')}>
            <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                {leftComponents}
            </div>
            <div className="flex gap-2">{rightComponents}</div>
        </div>
    )
}

export default HeaderPage
