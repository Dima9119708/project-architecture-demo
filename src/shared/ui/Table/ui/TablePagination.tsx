import { useMemo } from 'react'

import { cn } from '@/shared/lib/utils.ts'
import { Pagination } from '@/shared/ui/Pagination'

interface TablePaginationWithPageAndCountProps {
    className?: string
    page: number
    count?: number | null
    onPage: (page: number) => void
}

interface TablePaginationWithLimitAndOffsetProps {
    className?: string
    limit: number | null
    offset: number
    count?: number | null
    onOffset: (page: number) => void
}

export const TablePagination = (props: TablePaginationWithPageAndCountProps | TablePaginationWithLimitAndOffsetProps) => {
    const { page, count } = useMemo(() => {
        let page = 1
        let count = 1

        if ('limit' in props && 'offset' in props && 'count' in props) {
            page = Math.floor(props.offset / (props.limit ?? 1)) + 1
            count = Math.ceil((props.count ?? 1) / (props.limit ?? 1))

            if (typeof props.count !== 'number' || props.count === 0) {
                count = 1
            }

            if (typeof props.limit !== 'number' || props.limit === 0) {
                page = 1
            }
        }

        if ('page' in props && 'count' in props) {
            page = props.page
            count = props.count ?? 1
        }

        return { page, count }
    }, [props])

    return (
        <Pagination
            className={cn('grid items-end justify-start flex-[0_0_var(--table-h-pagination)]', props.className)}
            count={count}
            page={page}
            onChange={(newPage) => {
                if ('limit' in props && 'offset' in props) {
                    props.onOffset(newPage * (props.limit ?? 1) - (props.limit ?? 1))
                }

                if ('page' in props && 'count' in props) {
                    props.onPage(newPage)
                }
            }}
        />
    )
}
