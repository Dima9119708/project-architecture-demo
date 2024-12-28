import generate from 'boring-name-generator'
import { Plus } from 'lucide-react'
import { nanoid } from 'nanoid'
import { FC, PropsWithChildren, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { useMutation } from '@tanstack/react-query'

import { useInvalidateBoardById } from '@/entities/board'
import {
    useGetTaskByBoardIdFromCache,
    useInvalidateTaskByBoardId,
    useOptimisticCreateTaskByBoardId,
    useSetTaskByBoardIdInCache,
} from '@/entities/task'

import { api } from '@/shared/config/api/config.ts'
import { Button } from '@/shared/ui/button.tsx'
import { Input } from '@/shared/ui/input.tsx'

interface CreateTaskByBoardIdProps {
    className?: string
    boardId: string
    columnId: string
}

const useCreateTaskByBoardId = () => {
    const invalidateBoardById = useInvalidateBoardById()
    const invalidateTaskByBoardId = useInvalidateTaskByBoardId()
    const optimisticCreateTaskByBoardId = useOptimisticCreateTaskByBoardId()
    const getTaskByBoardIdFromCache = useGetTaskByBoardIdFromCache()
    const setTaskByBoardIdInCache = useSetTaskByBoardIdInCache()

    return useMutation({
        mutationFn: (variables: { boardId: string; columnId: string; title: string }) =>
            api.createColumnItem(variables.boardId, variables.columnId, variables.title),
        onMutate: (variables) => {
            const oldData = getTaskByBoardIdFromCache(variables.boardId)

            optimisticCreateTaskByBoardId(variables.boardId, {
                ...variables,
                id: nanoid(),
            })

            return oldData
        },
        onSuccess: async (_, variables) => {
            await Promise.all([invalidateBoardById(variables.boardId), invalidateTaskByBoardId(variables.boardId)])
        },
        onError: (_, variables, context) => {
            setTaskByBoardIdInCache(variables.boardId, context)
        },
    })
}

export const CreateTaskByBoardById: FC<PropsWithChildren<CreateTaskByBoardIdProps>> = (props) => {
    const { mutate } = useCreateTaskByBoardId()
    const [isCreate, setIsCreate] = useState(false)
    const { handleSubmit, reset, control } = useForm({
        defaultValues: {
            title: '',
        },
    })

    if (!isCreate) {
        return (
            <Button
                className={props.className}
                onClick={() => setIsCreate((prevState) => !prevState)}
            >
                <Plus /> Create task
            </Button>
        )
    }

    const onSubmit = () => {
        reset()
        setIsCreate((prevState) => !prevState)

        mutate({
            boardId: props.boardId,
            columnId: props.columnId,
            title: generate().spaced,
        })
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-background rounded flex gap-2"
        >
            <Controller
                name="title"
                control={control}
                render={({ field }) => (
                    <Input
                        placeholder="Coздать задачу"
                        autoFocus
                        {...field}
                    />
                )}
            />
        </form>
    )
}
