import { Eye } from 'lucide-react'
import { Fragment } from 'react'
import { Link, generatePath } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import SearchInput from '@/features/boards/search-input'
import Pagination from '@/features/boards/update-table-pagination'

import { boardsQuery, useLimitState, useOffsetState, useSearchState } from '@/entities/boards'

import { EnumRoutes } from '@/shared/config/routes/routes'
import {
    Table,
    TableBody,
    TableCell,
    TableCellRowDetail,
    TableHead,
    TableHeadCellRowDetail,
    TableHeadSortController,
    TableHeader,
    TableRoot,
    TableRow,
    TableRowDetail,
} from '@/shared/ui/Table'
import HeaderPage from '@/shared/ui/app-shell/header-page'
import { MainPage } from '@/shared/ui/app-shell/main-page'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'

const BoardsPage = () => {
    const [search] = useSearchState()
    const [offset] = useOffsetState()
    const [limit, setLimit] = useLimitState()

    const { data, isLoading } = useQuery({
        ...boardsQuery({
            search: search ?? undefined,
            offset,
            limit: limit ?? undefined,
        }),
    })

    return (
        <MainPage>
            <HeaderPage
                title="Boards"
                rightComponents={[<SearchInput />]}
            />

            <TableRoot>
                <Table
                    onCalculateBodyRowCount={setLimit}
                    isLoading={isLoading}
                >
                    <TableHeader>
                        <TableHeadCellRowDetail />
                        <TableHead>
                            <TableHeadSortController name="title">Title</TableHeadSortController>
                        </TableHead>
                        <TableHead>
                            <TableHeadSortController name="columns">Columns</TableHeadSortController>
                        </TableHead>
                        <TableHead className="w-[2rem]" />
                    </TableHeader>
                    <TableBody>
                        {data?.data?.map((board) => (
                            <Fragment key={board.id}>
                                <TableRow id={board.id}>
                                    <TableCellRowDetail id={board.id} />

                                    <TableCell>
                                        <Link
                                            to={generatePath(EnumRoutes.BOARD, { boardId: board.id })}
                                            className="hover:underline"
                                        >
                                            {board.title}
                                        </Link>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap items-center gap-3">
                                            {board.columns.map((column) => (
                                                <Badge
                                                    key={column.id}
                                                    variant="outline"
                                                >
                                                    {column.title}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>

                                    <TableCell>
                                        <Link to={generatePath(EnumRoutes.BOARD, { boardId: board.id })}>
                                            <Button
                                                size="icon"
                                                variant="outline"
                                            >
                                                <Eye />
                                            </Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>

                                <TableRowDetail id={board.id}>{board.description}</TableRowDetail>
                            </Fragment>
                        ))}
                    </TableBody>
                </Table>

                <Pagination count={data?.count} />
            </TableRoot>
        </MainPage>
    )
}

export default BoardsPage
