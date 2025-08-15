import { TableHead } from './TableHead.tsx'
import { ThHTMLAttributes, forwardRef } from 'react'


import { cn } from '@/utils/helpers/cn.ts'

export const TableHeadCellRowDetail = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>((props, ref) => (
    <TableHead
        className={cn('w-[var(--table-w-row-detail)]', props.className)}
        {...props}
        ref={ref}
    />
))
