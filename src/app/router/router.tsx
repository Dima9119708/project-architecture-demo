import { createBrowserRouter } from 'react-router-dom'

import AppInit from '@/app/app-init/app-init.tsx'

import { EnumRoutes } from '@/shared/config/routes/routes.ts'

import Board from '@/pages/board/ui/Board.tsx'
import { BoardsPage } from '@/pages/boards'
import { ManageBoardsPage } from '@/pages/manage-boards'

const basename = import.meta.env.VITE_APP_BASENAME

export const router = createBrowserRouter(
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
            ],
        },
    ],
    { basename: basename }
)
