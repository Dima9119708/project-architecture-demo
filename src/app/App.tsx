import { router } from './router/router'
import './styles/index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import { NuqsAdapter } from 'nuqs/adapters/react-router'
import { RouterProvider } from 'react-router-dom'

import { queryClient } from '@/shared/config/query-client/config'

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <RouterProvider
                    router={router}
                    future={{ v7_startTransition: false }}
                />
            </NuqsAdapter>
        </QueryClientProvider>
    )
}
