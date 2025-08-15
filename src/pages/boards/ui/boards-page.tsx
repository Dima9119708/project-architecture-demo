import { Eye } from 'lucide-react'
import { Fragment } from 'react'
import { Link, generatePath } from 'react-router-dom'

import { EnumRoutes } from '@/config/routes/routes'

import { useLimitState, useOffsetState, useSearchState } from '@/utils/helpers/states-hooks'
import { boardsQuery } from '@/utils/queries/boards'

import SearchInput from '@/pages/boards/ui/search-input'
import Pagination from '@/pages/boards/ui/update-table-pagination'

import { MainPage } from '@/components/containers/main-page/main-page'
import TitlePage from '@/components/containers/title-page/title-page'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
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
} from '@/components/ui/ui-table'

import { useQuery } from '@tanstack/react-query'

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
            <TitlePage
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
