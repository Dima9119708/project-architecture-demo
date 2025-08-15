import { createContext, useContext } from 'react'

interface TSession {
    id: string
    role: string
    name: string
}

const createSessionContext = createContext<TSession | null>(null)

export const SessionProvider = createSessionContext.Provider

export const useSessionContext = () => useContext(createSessionContext)
