import { Eye, Pencil, Trash2 } from 'lucide-react'
import { FC, Fragment, Suspense } from 'react'
import { Link, generatePath } from 'react-router-dom'

import { useQuery } from '@tanstack/react-query'

import { FormManageBoardLazy, WrapperFormManageBoard } from '@/features/manage-boards/create-and-update'
import SearchInput from '@/features/manage-boards/search-input'
import Pagination from '@/features/manage-boards/update-table-pagination.tsx'

import { manageBoardsQuery, useLimitState, useOffsetState, useSearchState } from '@/entities/manage-boards'

import { EnumRoutes } from '@/shared/config/routes/routes.ts'
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
    TableRowHighlightController,
} from '@/shared/ui/Table'
import HeaderPage from '@/shared/ui/app-shell/header-page'
import { MainPage } from '@/shared/ui/app-shell/main-page'
import { Badge } from '@/shared/ui/badge'
import { Button } from '@/shared/ui/button'
import { Spinner } from '@/shared/ui/spinner'

const ContainerFormManageBoard: FC<{ isOpen: boolean }> = (props) => {
    return <Suspense fallback={<Spinner />}>{props.isOpen && <FormManageBoardLazy />}</Suspense>
}

const ManageBoardsPage = () => {
    const [search] = useSearchState()
    const [offset] = useOffsetState()
    const [limit, setLimit] = useLimitState()

    const { data, isLoading } = useQuery({
        ...manageBoardsQuery({
            search: search ?? undefined,
            offset,
            limit: limit ?? undefined,
        }),
    })

    return (
        <MainPage>
            <HeaderPage
                title="Manage boards"
                leftComponents={[
                    <WrapperFormManageBoard triggerElement={<Button variant="default">Create board</Button>}>
                        {(open) => <ContainerFormManageBoard isOpen={open} />}
                    </WrapperFormManageBoard>,
                ]}
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
                        <TableHead className="w-[2rem]" />
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
                                    <TableCell>
                                        <TableRowHighlightController id={board.id}>
                                            {({ onToggleRowActive }) => {
                                                return (
                                                    <WrapperFormManageBoard
                                                        boardId={board.id}
                                                        onOpenChange={onToggleRowActive}
                                                        triggerElement={
                                                            <Button
                                                                size="icon"
                                                                variant="outline"
                                                            >
                                                                <Pencil />
                                                            </Button>
                                                        }
                                                    >
                                                        {(open) => <ContainerFormManageBoard isOpen={open} />}
                                                    </WrapperFormManageBoard>
                                                )
                                            }}
                                        </TableRowHighlightController>
                                    </TableCell>

                                    <TableCell>
                                        <Button
                                            size="icon"
                                            variant="destructive"
                                        >
                                            <Trash2 />
                                        </Button>
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

export default ManageBoardsPage
