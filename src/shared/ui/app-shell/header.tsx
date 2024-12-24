import { FC, PropsWithChildren } from 'react'

export const Header: FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Logo</h1>
            {children}
        </header>
    )
}
