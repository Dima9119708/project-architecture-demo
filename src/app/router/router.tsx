import { createBrowserRouter } from 'react-router-dom'

import AppInit from '@/app/app-init/app-init'
import NotFoundPage from '@/app/router/not-found-page'

import { EnumRoutes } from '@/shared/config/routes/routes'

const basename = import.meta.env.VITE_APP_BASENAME

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <AppInit />,
            children: [
                {
                    path: EnumRoutes.MANAGE_BOARDS,
                    lazy: async () => {
                        const { ManageBoardsPage } = await import('@/pages/manage-boards')

                        return {
                            element: <ManageBoardsPage />,
                        }
                    },
                },
                {
                    path: EnumRoutes.BOARD,
                    lazy: async () => {
                        const { Board } = await import('@/pages/board')

                        return {
                            element: <Board />,
                        }
                    },
                },
                {
                    path: EnumRoutes.BOARDS,
                    lazy: async () => {
                        const { BoardsPage } = await import('@/pages/boards')

                        return {
                            element: <BoardsPage />,
                        }
                    },
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
