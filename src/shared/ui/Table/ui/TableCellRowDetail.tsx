import { ChevronDown, ChevronUp } from 'lucide-react'
import { ThHTMLAttributes, forwardRef } from 'react'

import { TableCell, TableRowDetailController } from '@/shared/ui/Table'

export const TableCellRowDetail = forwardRef<
    HTMLTableCellElement,
    { id: string | number } & Omit<ThHTMLAttributes<HTMLTableCellElement>, 'id'>
>((props, ref) => (
    <TableCell
        {...props}
        id={`${props.id}`}
        ref={ref}
    >
        <TableRowDetailController id={props.id}>
            {({ active, onOpen, onClose }) => (
                <div
                    className="cursor-pointer"
                    onClick={() => (active ? onClose() : onOpen())}
                >
                    {active ? <ChevronUp className="h-[1rem] w-[1rem]" /> : <ChevronDown className="h-[1rem] w-[1rem]" />}
                </div>
            )}
        </TableRowDetailController>
    </TableCell>
))
