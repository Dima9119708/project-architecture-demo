import { FC, PropsWithChildren } from 'react'

import { cn } from '@/utils/helpers/cn'

interface TaskTitleProps {
    className?: string
}

const TaskTitle: FC<PropsWithChildren<TaskTitleProps>> = (props) => {
    return <div className={cn('font-semibold leading-none tracking-tight', props.className)}>{props.children}</div>
}

export default TaskTitle
