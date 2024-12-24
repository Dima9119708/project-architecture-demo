import { useQueryClient } from '@tanstack/react-query'
import { produce } from 'immer'

import { TTask } from '@/entities/task/model/types.ts'

import { api } from '@/shared/config/api/config.ts'

const taskQueryKey = 'task'

export const tasksQuery = () => ({
    queryKey: [taskQueryKey],
    queryFn: () => api.getTasks(),
})

export const taskByBoardIdQuery = (boardId: string) => ({
    queryKey: [taskQueryKey, 'byId', boardId],
    queryFn: () => api.getTasksByBoardId(boardId),
})

export const useInvalidateTaskByBoardId = () => {
    const queryClient = useQueryClient()

    return (id: string) => queryClient.invalidateQueries(taskByBoardIdQuery(id))
}

export const useGetTaskByBoardIdFromCache = () => {
    const queryClient = useQueryClient()

    return (boardId: string) => queryClient.getQueryData<TTask[]>(taskByBoardIdQuery(boardId).queryKey)
}

export const useOptimisticCreateTaskByBoardId = () => {
    const queryClient = useQueryClient()

    return (boardId: string, newTask: TTask) =>
        queryClient.setQueryData<TTask[]>(taskByBoardIdQuery(boardId).queryKey, (old) => {
            return produce(old, (draft) => {
                if (draft) {
                    draft.push(newTask)
                }
            })
        })
}

export const useOptimisticRemoveTaskByBoardId = () => {
    const queryClient = useQueryClient()

    return (boardId: string, taskId: TTask['id']) =>
        queryClient.setQueryData<TTask[]>(taskByBoardIdQuery(boardId).queryKey, (old) => {
            if (old) {
                return old.filter((task) => task.id !== taskId)
            }
        })
}

export const useSetTaskByBoardIdInCache = () => {
    const queryClient = useQueryClient()

    return (boardId: string, tasks?: TTask[]) => {
        if (!tasks) return
        queryClient.setQueryData<TTask[]>(taskByBoardIdQuery(boardId).queryKey, tasks)
    }
}
