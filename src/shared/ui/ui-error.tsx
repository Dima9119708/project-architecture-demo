import { FC, PropsWithChildren } from 'react'

import { cn } from '@/shared/lib/utils.ts'

interface ErrorProps {
    className?: string
}

const UIError: FC<PropsWithChildren<ErrorProps>> = (props) => {
    return <p className={cn('text-xs text-destructive', props.className)}>{props.children}</p>
}

export default UIError
