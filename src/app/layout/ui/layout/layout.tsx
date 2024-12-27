import { ReactNode } from 'react'

export const Layout = ({ children }: { children: ReactNode }) => {
    return <div className="flex h-[100vh] flex-col bg-muted p-[2rem] gap-6">{children}</div>
}
