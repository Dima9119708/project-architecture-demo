import { useSortState } from './useSortState.ts'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FC, FunctionComponent, ReactNode, useCallback } from 'react'

import { cn } from '@/shared/lib/utils.ts'
import { SortDirection } from '@/shared/ui/Table/model/SortDirectionEnum.ts'
import { useTableContext } from '@/shared/ui/Table/model/TableContext.ts'
import { rowHighlightStore, subRowStore } from '@/shared/ui/Table/model/TableStores.ts'
import { useExternalBooleanState } from '@/shared/ui/Table/model/useExternalBooleanState.ts'

export const TableRowHighlightController: FC<{
    children: FunctionComponent<{
        onRowActive: () => void
        onRowInactive: () => void
        active: boolean
        onToggleRowActive: (active: boolean) => void
    }>
    id: string | number
}> = (props) => {
    const { id } = props
    const context = useTableContext()

    const onRowActive = useCallback(() => {
        const listeners = rowHighlightStore.get(context)?.get(id)?.listeners ?? new Set()

        rowHighlightStore.get(context)?.set(id, {
            listeners,
            state: true,
        })

        listeners.forEach((listener) => listener())
    }, [context, id])

    const onRowInactive = useCallback(() => {
        const listeners = rowHighlightStore.get(context)?.get(id)?.listeners ?? new Set()

        rowHighlightStore.get(context)?.set(id, {
            listeners,
            state: false,
        })

        listeners.forEach((listener) => listener())
    }, [context, id])

    const onToggleRowActive = useCallback(
        (active: boolean) => {
            if (active) {
                onRowActive()
            } else {
                onRowInactive()
            }
        },
        [onRowActive, onRowInactive]
    )

    const active = useExternalBooleanState(rowHighlightStore, id)

    return props.children({
        onRowActive,
        onRowInactive,
        onToggleRowActive,
        active,
    })
}

export const TableRowDetailController: FC<{
    children: FunctionComponent<{ onOpen: () => void; onClose: () => void; active: boolean }>
    id: string | number
}> = (props) => {
    const { id } = props
    const tableId = useTableContext()

    const onOpen = useCallback(() => {
        const listeners = subRowStore.get(tableId)?.get(id)?.listeners ?? new Set()

        subRowStore.get(tableId)?.set(id, {
            listeners,
            state: true,
        })

        listeners.forEach((listener) => listener())
    }, [id, tableId])

    const onClose = useCallback(() => {
        const listeners = subRowStore.get(tableId)?.get(id)?.listeners ?? new Set()

        subRowStore.get(tableId)?.set(id, {
            listeners,
            state: false,
        })

        listeners.forEach((listener) => listener())
    }, [id, tableId])

    const active = useExternalBooleanState(subRowStore, id)

    return props.children({
        onClose,
        onOpen,
        active,
    })
}

export const TableHeadSortController: FC<{
    name: string
    initialState?: SortDirection
    initialActive?: boolean
    onChange?: (name: string, state: SortDirection) => void
    className?: string
    children: ReactNode
}> = ({ name, className, initialState = SortDirection.Descending, initialActive = false, children, onChange }) => {
    const { sortValue, isActive, toggleSortState } = useSortState(name, initialState, initialActive)

    const handleSortChange = () => {
        toggleSortState()

        if (onChange) {
            onChange(name, sortValue === SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending)
        }
    }

    return (
        <span
            onClick={handleSortChange}
            className={cn(
                'flex items-center gap-2 cursor-pointer',
                {
                    'text-muted-foreground': !isActive,
                    'text-primary': isActive,
                },
                className
            )}
        >
            {children}
            {sortValue === 'asc' && <ChevronUp className="h-[1rem] w-[1rem]" />}
            {sortValue === 'desc' && <ChevronDown className="h-[1rem] w-[1rem]" />}
        </span>
    )
}
