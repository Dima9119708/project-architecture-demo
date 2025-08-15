import { FC, PropsWithChildren } from 'react'


import { cn } from '@/utils/helpers/cn.ts'

interface TitleProps {
    className?: string
}

const ColumnTitle: FC<PropsWithChildren<TitleProps>> = (props) => {
    const { className, children } = props

    return <div className={cn('font-semibold tracking-tight text-2xl', className)}>{children}</div>
}

export default ColumnTitle
