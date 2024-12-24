import { parseAsArrayOf, parseAsInteger, parseAsString, useQueryState } from 'nuqs'

import { SortDirection } from '@/shared/ui/Table'

export const useLimitState = () => useQueryState('limit', parseAsInteger)
export const useOffsetState = () => useQueryState('offset', parseAsInteger.withDefault(0))
export const useSearchState = () => useQueryState('search', parseAsString)
export const useSortState = () =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    useQueryState<[string, SortDirection]>('sort', parseAsArrayOf(parseAsString).withDefault(['', SortDirection.Descending]))
