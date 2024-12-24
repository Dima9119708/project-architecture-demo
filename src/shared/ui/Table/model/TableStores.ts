import { SortDirection } from '@/shared/ui/Table/model/SortDirectionEnum.ts'

export const rowHighlightStore = new Map<string, Map<string | number, { listeners: Set<() => void>; state: boolean }>>()
export const subRowStore = new Map<string, Map<string | number, { listeners: Set<() => void>; state: boolean }>>()
export const sortStore = new Map<string | number, Map<string, { state: [SortDirection, boolean]; listeners: Set<() => void> }>>()
