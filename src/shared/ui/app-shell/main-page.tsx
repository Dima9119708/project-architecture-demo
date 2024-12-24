import { FC, PropsWithChildren } from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const MainPage: FC<PropsWithChildren<{ className?: string }>> = ({ children, className }) => {
    return <main className={cn('flex flex-col flex-1 gap-6', className)}>{children}</main>
}
