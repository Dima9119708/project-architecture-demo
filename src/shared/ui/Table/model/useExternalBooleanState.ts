import { useTableContext } from '../model/TableContext.ts'
import { useCallback, useSyncExternalStore } from 'react'

export const useExternalBooleanState = (
    map: Map<string | number, Map<string | number, { listeners: Set<() => void>; state: boolean }>>,
    id: string | number
) => {
    const tableId = useTableContext()

    const subscribe = useCallback<(onStoreChange: () => void) => () => void>(
        (onStoreChange) => {
            if (map.has(tableId)) {
                if (map.get(tableId)?.has(id)) {
                    const row = map.get(tableId)?.get(id)

                    map.get(tableId)?.set(id, {
                        state: row?.state ?? false,
                        listeners: row?.listeners.add(onStoreChange) ?? new Set([onStoreChange]),
                    })
                } else {
                    map.get(tableId)?.set(id, {
                        state: map.get(tableId)?.get(id)?.state ?? false,
                        listeners: new Set([onStoreChange]),
                    })
                }
            }

            return () => {
                map.get(tableId)?.get(id)?.listeners.delete(onStoreChange)
            }
        },
        [id, map, tableId]
    )

    const getSnapshot = useCallback(() => {
        return map.get(tableId)?.get(id)?.state ?? false
    }, [id, map, tableId])

    return useSyncExternalStore(subscribe, getSnapshot)
}
