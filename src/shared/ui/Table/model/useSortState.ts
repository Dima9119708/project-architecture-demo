import { SortDirection } from './SortDirectionEnum.ts'
import { useTableContext } from './TableContext.ts'
import { sortStore } from './TableStores.ts'
import { useCallback, useSyncExternalStore } from 'react'

const DEFAULT_INITIAL_STATE: [SortDirection, boolean] = [SortDirection.Descending, false]

export const useSortState = (name: string, initialState: SortDirection, initialActive: boolean = false) => {
    const tableId = useTableContext()

    const state = useSyncExternalStore(
        (onStoreChange) => {
            const tableMap = sortStore.get(tableId) ?? new Map()
            if (!sortStore.has(tableId)) {
                sortStore.set(tableId, tableMap)
            }

            const columnState = tableMap.get(name)
            if (!columnState) {
                const initial: [string, boolean] = [initialState, initialActive]
                const listeners = new Set<() => void>()
                tableMap.set(name, { state: initial, listeners })
            }

            const currentColumn = tableMap.get(name)!
            currentColumn.listeners.add(onStoreChange)

            return () => currentColumn.listeners.delete(onStoreChange)
        },
        () => {
            const tableMap = sortStore.get(tableId)
            return tableMap?.get(name)?.state ?? DEFAULT_INITIAL_STATE
        }
    )

    const [sortValue, isActive] = state

    const toggleSortState = useCallback(() => {
        const tableMap = sortStore.get(tableId)

        if (!tableMap) return

        for (const [columnName, columnState] of tableMap.entries()) {
            if (columnName !== name) {
                columnState.state = [SortDirection.Descending, false]
                columnState.listeners.forEach((listener) => listener())
            }
        }

        const currentColumn = tableMap.get(name)

        if (currentColumn) {
            let nextSortValue: SortDirection

            if (!isActive) {
                nextSortValue = SortDirection.Descending
            } else {
                nextSortValue = sortValue === SortDirection.Descending ? SortDirection.Ascending : SortDirection.Descending
            }

            currentColumn.state = [nextSortValue, true]
            currentColumn.listeners.forEach((listener) => listener())
        }
    }, [isActive, sortValue, tableId, name])

    return {
        sortValue,
        isActive,
        toggleSortState,
    }
}
