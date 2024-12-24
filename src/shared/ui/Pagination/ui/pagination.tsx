import usePagination from '../lib/usePagination.ts'
import { UsePaginationProps } from '../lib/usePagination.types.ts'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from './pagination-components.tsx'

interface PaginationProps extends Pick<UsePaginationProps, 'page' | 'count'> {
    className?: string
    classNameContent?: string
    onChange: (page: number) => void
}

export const UIPagination = (props: PaginationProps) => {
    const { className, classNameContent, page, count, onChange } = props

    const { items } = usePagination({
        page,
        count,
        onChange: (_, page) => {
            onChange(page)
        },
    })

    const countPages = items.filter((item) => item.type === 'page').length

    return (
        <Pagination className={className}>
            <PaginationContent className={classNameContent}>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (
                            <PaginationItem key={index}>
                                <PaginationEllipsis />
                            </PaginationItem>
                        )
                    } else if (type === 'page') {
                        children = (
                            <PaginationItem
                                key={index}
                                {...item}
                                disabled={countPages === 1}
                            >
                                <PaginationLink
                                    href="#"
                                    isActive={selected}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        )
                    } else if (type === 'next') {
                        children = (
                            <PaginationItem
                                key={index}
                                {...item}
                            >
                                <PaginationNext
                                    href="#"
                                    size="icon"
                                />
                            </PaginationItem>
                        )
                    } else if (type === 'previous') {
                        children = (
                            <PaginationItem
                                key={index}
                                {...item}
                            >
                                <PaginationPrevious
                                    href="#"
                                    size="icon"
                                />
                            </PaginationItem>
                        )
                    }

                    return children
                })}
            </PaginationContent>
        </Pagination>
    )
}
