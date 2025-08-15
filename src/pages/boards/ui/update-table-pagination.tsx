import { useLimitState, useOffsetState } from '@/utils/helpers/states-hooks'

import { TablePagination } from '@/components/ui/ui-table'

const Pagination = ({ count }: { count?: number }) => {
    const [limit] = useLimitState()
    const [offset, setOffset] = useOffsetState()

    return (
        <TablePagination
            limit={limit}
            offset={offset}
            count={count}
            onOffset={setOffset}
        />
    )
}

export default Pagination
