import React, { FC, PropsWithChildren, Ref } from 'react'

import { cn } from '@/shared/lib/utils.ts'

interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    reference?: Ref<HTMLDivElement>
}

const Column: FC<PropsWithChildren<ColumnProps>> = (props) => {
    const { className, children, reference, ...rest } = props

    return (
        <div
            ref={reference}
            className={cn('rounded border text-card-foreground shadow p-2 bg-muted', className)}
            {...rest}
        >
            {children}
        </div>
    )
}

export default Column
