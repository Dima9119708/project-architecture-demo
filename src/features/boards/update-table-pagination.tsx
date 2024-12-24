import { useLimitState, useOffsetState } from '@/entities/manage-boards'

import { TablePagination } from '@/shared/ui/Table'

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
