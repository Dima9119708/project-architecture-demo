import { rowHighlightStore } from '../model/TableStores'
import { useExternalBooleanState } from '../model/useExternalBooleanState.ts'
import * as React from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const TableRow = React.forwardRef<
    HTMLTableRowElement,
    { id: string | number } & Omit<React.HTMLAttributes<HTMLTableRowElement>, 'id'>
>(({ className, id, ...props }, ref) => {
    const active = useExternalBooleanState(rowHighlightStore, id)

    return (
        <tr
            ref={ref}
            className={cn(
                'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted h-[var(--table-h-row)]',
                active && 'bg-muted',
                className
            )}
            {...props}
        />
    )
})

TableRow.displayName = 'TableRow'
