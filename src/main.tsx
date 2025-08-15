import App from '@/app/App'

import ReactQueryClientProvider from '@/components/providers/query-client-provider'

import { NuqsAdapter } from 'nuqs/adapters/react-router'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
    <ReactQueryClientProvider>
        <NuqsAdapter>
            <App />
        </NuqsAdapter>
    </ReactQueryClientProvider>
)
