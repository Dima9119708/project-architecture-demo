import * as React from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className, ...props }, ref) => (
        <thead
            ref={ref}
            className={cn('[&_tr]:border-b', className)}
            {...props}
        >
            <tr className={cn('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-[var(--table-h-header)]')}>
                {props.children}
            </tr>
        </thead>
    )
)

TableHeader.displayName = 'TableHeader'
