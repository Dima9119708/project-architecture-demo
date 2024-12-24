import { memo } from 'react'

import { RemoveTaskByBoardById } from '@/features/task/remove-task-by-board-by-id'

import { Task, TaskTitle } from '@/entities/task'

export const RenderTask = memo((props: { title: string; columnId: string; itemId: string; boardId: string }) => {
    const { title, columnId, itemId, boardId } = props

    return (
        <Task
            className="mb-4 last:mb-0"
            actionsSlot={
                <div>
                    <RemoveTaskByBoardById
                        columnId={columnId}
                        boardId={boardId}
                        itemId={itemId}
                    />
                </div>
            }
        >
            <TaskTitle> {title}</TaskTitle>
        </Task>
    )
})
