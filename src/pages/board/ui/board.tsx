import { CircleArrowLeft, Move } from 'lucide-react'
import { useNavigate, useParams } from 'react-router-dom'

import { CreateColumn } from './create-column'
import { ColumnDnDContext, SortableColumn } from './move-column'

import { MainPage } from '@/components/containers/main-page/main-page'
import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'

import { RenderColumn } from './render-column'
import { useBoardQuery } from '../query'

const Board = () => {
    const navigate = useNavigate()
    const params = useParams<{ boardId: string }>()
    const BOARD_ID = params.boardId ?? ''
    const boardQuery = useBoardQuery(BOARD_ID)

    return (
        <MainPage className="overflow-auto">
            <Button
                onClick={() => navigate(-1)}
                size="icon"
            >
                <CircleArrowLeft />
            </Button>

            <CreateColumn
                className="w-max"
                boardId={BOARD_ID}
            />

            {boardQuery.isLoading && <Spinner />}

            <ColumnDnDContext
                boardId={BOARD_ID}
                items={boardQuery.data.columns || []}
                renderDragOverlayContent={(dragColumn) =>
                    dragColumn &&
                    boardQuery.data &&
                    boardQuery.data.columns?.map(
                        ({ title, id: columnId, items }) =>
                            columnId === dragColumn.id && (
                                <div
                                    className="flex"
                                    key={columnId}
                                >
                                    <div className="basis-[20rem] flex-shrink-0">
                                        <RenderColumn
                                            title={title}
                                            columnId={columnId}
                                            items={items}
                                            boardId={BOARD_ID}
                                        />
                                    </div>
                                </div>
                            )
                    )
                }
            >
                <div className="w-full flex-1 flex gap-8 overflow-auto bg-background p-4 rounded">
                    {boardQuery.data &&
                        boardQuery.data.columns?.map(({ title, id: columnId, items }) => (
                            <SortableColumn
                                key={columnId}
                                id={columnId}
                            >
                                {(sortableProps) => (
                                    <RenderColumn
                                        key={columnId}
                                        title={title}
                                        columnId={columnId}
                                        items={items}
                                        boardId={BOARD_ID}
                                    >
                                        <div
                                            ref={sortableProps.setDraggableNodeRef}
                                            {...sortableProps.listeners}
                                            {...sortableProps.attributes}
                                        >
                                            <Move />
                                        </div>
                                    </RenderColumn>
                                )}
                            </SortableColumn>
                        ))}
                </div>
            </ColumnDnDContext>
        </MainPage>
    )
}

export default Board
