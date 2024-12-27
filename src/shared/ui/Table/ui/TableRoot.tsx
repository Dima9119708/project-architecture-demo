import { FC, PropsWithChildren, useId, useLayoutEffect } from 'react'

import { cn } from '@/shared/lib/utils.ts'

import { TableContextProvider } from '../model/TableContext.ts'
import { rowHighlightStore, subRowStore } from '../model/TableStores'

export const TableRoot: FC<Required<PropsWithChildren> & { className?: string }> = (props) => {
    const id = useId()

    useLayoutEffect(() => {
        rowHighlightStore.set(id, new Map())
        subRowStore.set(id, new Map())

        return () => {
            rowHighlightStore.delete(id)
            subRowStore.delete(id)
        }
    }, [id])

    return (
        <TableContextProvider value={id}>
            <div className={cn('flex flex-col h-full overflow-hidden shadow rounded-md p-4 bg-background', props.className)}>
                {props.children}
            </div>
        </TableContextProvider>
    )
}
