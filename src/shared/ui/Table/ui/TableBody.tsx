import * as React from 'react'
import { useId } from 'react'

import { cn } from '@/shared/lib/utils.ts'

import { TableRow } from './TableRow'

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, ...props }, ref) => {
        const countChildren = React.Children.count(props.children)
        const id = useId()

        return (
            <tbody
                ref={ref}
                className={cn('[&_tr:last-child]:border-0', className)}
                {...props}
            >
                {countChildren === 0 && <TableRow id={id} />}
                {props.children}
            </tbody>
        )
    }
)

TableBody.displayName = 'TableBody'
