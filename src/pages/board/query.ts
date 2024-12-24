import { produce } from 'immer'

import { useQueries } from '@tanstack/react-query'

import { TBoard, boardByIdQuery } from '@/entities/board'
import { TTask, taskByBoardIdQuery } from '@/entities/task'

export const useBoardQuery = (boardId: string) => {
    return useQueries({
        queries: [boardByIdQuery(boardId), taskByBoardIdQuery(boardId)],
        combine: (result) => {
            return {
                ...result[0],
                ...result[1],
                data: {
                    ...result[0].data,
                    columns: result[0].data?.columns.map((column) => {
                        return produce(column, (draft) => {
                            if (result[1].data !== undefined) {
                                draft.items = result[1].data.filter((item) => item.columnId === column.id)
                            }
                        })
                    }),
                } as unknown as TBoard<TTask[]>,
            }
        },
    })
}
