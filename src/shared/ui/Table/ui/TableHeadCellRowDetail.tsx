import { TableHead } from './TableHead'
import { ThHTMLAttributes, forwardRef } from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const TableHeadCellRowDetail = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
    <TableHead
        className={cn('w-[var(--table-w-row-detail)]', props.className)}
        {...props}
        ref={ref}
    />
))
