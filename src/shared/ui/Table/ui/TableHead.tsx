import * as React from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({ className, ...props }, ref) => (
        <th
            ref={ref}
            className={cn(
                'h-10 px-2 text-left align-middle text-muted-foreground font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                className
            )}
            {...props}
        >
            {props.children}
        </th>
    )
)

TableHead.displayName = 'TableHead'
