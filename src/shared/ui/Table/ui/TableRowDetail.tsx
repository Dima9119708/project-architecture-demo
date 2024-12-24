import { subRowStore } from '../model/TableStores.ts'
import { useExternalBooleanState } from '../model/useExternalBooleanState.ts'
import * as React from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const TableRowDetail = React.forwardRef<
    HTMLTableCellElement,
    { id: string | number } & Omit<React.TdHTMLAttributes<HTMLTableCellElement>, 'id'>
>(({ className, id, ...props }, ref) => {
    const active = useExternalBooleanState(subRowStore, id)

    return (
        active && (
            <tr className="border-b">
                <td
                    ref={ref}
                    colSpan="100%"
                    className={cn(
                        'p-2 text-left font-normal align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
                        className
                    )}
                    {...props}
                />
            </tr>
        )
    )
})
