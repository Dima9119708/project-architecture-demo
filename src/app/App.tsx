import { RouterProvider } from 'react-router-dom'

import { QueryClientProvider } from '@tanstack/react-query'

import { queryClient } from '@/shared/config/query-client/config'
import { Spinner } from '@/shared/ui/spinner'

import { router } from './router/router'
import './styles/index.css'
import { NuqsAdapter } from 'nuqs/adapters/react-router'

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <NuqsAdapter>
                <RouterProvider
                    router={router}
                    fallbackElement={<Spinner overlay />}
                    future={{ v7_startTransition: false }}
                />
            </NuqsAdapter>
        </QueryClientProvider>
    )
}
