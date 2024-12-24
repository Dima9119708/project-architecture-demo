import { FC, PropsWithChildren, ReactNode } from 'react'

import { cn } from '@/shared/lib/utils.ts'

interface TaskProps {
    className?: string
    actionsSlot: ReactNode
}

const Task: FC<PropsWithChildren<TaskProps>> = (props) => {
    return (
        <div className={cn('bg-card min-h-16 p-2 flex justify-between', props.className)}>
            {props.children}

            {props.actionsSlot}
        </div>
    )
}

export default Task
