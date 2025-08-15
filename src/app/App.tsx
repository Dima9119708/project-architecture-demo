import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'

import AppInit from '@/app/app-init/app-init'

import { EnumRoutes } from '@/config/routes/routes'

import NotFoundPage from '@/components/containers/not-found-page/not-found-page'
import { Spinner } from '@/components/ui/spinner'

import './index.css'

const basename = import.meta.env.VITE_APP_BASENAME

const router = createBrowserRouter(
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

export default function App() {
    return (
        <RouterProvider
            router={router}
            fallbackElement={<Spinner overlay />}
            future={{ v7_startTransition: false }}
        />
    )
}
