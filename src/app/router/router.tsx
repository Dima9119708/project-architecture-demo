import { createHashRouter } from 'react-router-dom'

import AppInit from '@/app/app-init/app-init'
import NotFoundPage from '@/app/router/not-found-page'

import { EnumRoutes } from '@/shared/config/routes/routes'

import Board from '@/pages/board/ui/Board'
import { BoardsPage } from '@/pages/boards'
import { ManageBoardsPage } from '@/pages/manage-boards'

const basename = import.meta.env.VITE_APP_BASENAME

export const router = createHashRouter(
    [
        {
            path: '/',
            element: <AppInit />,
            children: [
                {
                    path: EnumRoutes.MANAGE_BOARDS,
                    element: <ManageBoardsPage />,
                },
                {
                    path: EnumRoutes.BOARD,
                    element: <Board />,
                },
                {
                    path: EnumRoutes.BOARDS,
                    element: <BoardsPage />,
                },
                {
                    path: '*',
                    element: <NotFoundPage />,
                },
            ],
        },
    ],
    { basename: basename }
)
