import { produce } from 'immer'
import { nanoid } from 'nanoid'

import { arrayMove } from '@dnd-kit/sortable'

export interface TaskDTO {
    id: string
    title: string
    boardId: string
    columnId: string
}

export interface Columns {
    id: string
    title: string
    items: { id: string }[]
}

interface UserDTO {
    id: string
    name: string
}

interface ManageRoleDTO {
    id: string
    name: string
    description: string
}

interface BoardDTO {
    id: string
    title: string
    project_access: {
        user: UserDTO
        role: ManageRoleDTO
    }[]
    board_access: 'open' | 'private'
    description?: string
    columns: Columns[]
}

const USERS = [
    { id: '1', name: 'Alice Smith', role: 'admin' },
    { id: '2', name: 'Bob Johnson', role: 'user' },
    { id: '3', name: 'Charlie Brown', role: 'user' },
    { id: '4', name: 'Diana Miller', role: 'user' },
]

const MANAGE_ROLES = [
    { id: '1', name: 'Administrator', role: 'admin', description: 'Admins can do most things, like update settings and add other admins.' },
    {
        id: '2',
        name: 'Member',
        role: 'member',
        description: 'Members are part of the team, and can add, edit, and collaborate on all work.',
    },
    {
        id: '3',
        name: 'Viewer',
        role: 'viewer',
        description: "Viewers can search through, view, and comment on your team's work, but not much else.",
    },
]

let BOARDS: Record<string, BoardDTO> = {
    '1': {
        id: '1',
        title: 'Laboratory',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
        board_access: 'open',
        project_access: [
            {
                user: USERS[0],
                role: MANAGE_ROLES[0],
            },
        ],
        columns: [
            {
                id: 'Column 1',
                title: 'TODO',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
            {
                id: 'Column 2',
                title: 'IN PROGRESS',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
            {
                id: 'Column 3',
                title: 'Test',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
            {
                id: 'Column 4',
                title: 'DONE',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
        ],
    },
    '2': {
        id: '2',
        title: 'Books',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.a',
        project_access: [
            {
                user: USERS[1],
                role: MANAGE_ROLES[1],
            },
        ],
        board_access: 'open',
        columns: [
            {
                id: 'Column 1',
                title: 'TODO',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
            {
                id: 'Column 2',
                title: 'IN PROGRESS',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
            {
                id: 'Column 3',
                title: 'DONE',
                items: [{ id: '1' }, { id: '2' }, { id: '3' }],
            },
        ],
    },
}

let ITEMS: Array<TaskDTO> = [
    { id: '1', title: 'Task 1', boardId: '1', columnId: 'Column 1' },
    { id: '2', title: 'Task 2', boardId: '1', columnId: 'Column 1' },
    { id: '3', title: 'Task 3', boardId: '1', columnId: 'Column 1' },
]

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const BackendMockApi = {
    getBoard: async (id: string) => {
        await delay(200)
        return BOARDS[id]
    },
    createColumn: async (id: string, title: string) => {
        await delay(200)

        BOARDS = produce(BOARDS, (draft) => {
            draft[id].columns.push({
                id: nanoid(),
                title,
                items: [],
            })
        })
    },
    removeColumn: async (boardId: string, columnId: string) => {
        await delay(200)

        BOARDS = produce(BOARDS, (draft) => {
            draft[boardId].columns = draft[boardId].columns.filter((column) => column.id !== columnId)
        })
    },
    createColumnItem: async (boardId: string, columnId: string, title: string) => {
        await delay(200)

        const taskId = { id: nanoid() }

        BOARDS = produce(BOARDS, (draft) => {
            const column = draft[boardId].columns.find((column) => column.id === columnId)

            if (column) {
                column.items.push({ id: taskId.id })
            }
        })

        ITEMS = produce(ITEMS, (draft) => {
            draft.push({
                id: taskId.id,
                title,
                boardId,
                columnId,
            })
        })
    },
    removeColumnItem: async (boardId: string, columnId: string, itemId: string) => {
        await delay(200)

        BOARDS = produce(BOARDS, (draft) => {
            const column = draft[boardId].columns.find((column) => column.id === columnId)

            if (column) {
                column.items = column.items.filter((item) => item.id !== itemId)
            }
        })

        ITEMS = ITEMS.filter(({ id }) => id !== itemId)
    },
    moveColumn: async (boardId: string, oldColumnId: string, newColumnId: string) => {
        await delay(500)
        const columns = BOARDS[boardId].columns

        const oldIndex = columns.findIndex((column) => column.id === oldColumnId)
        const newIndex = columns.findIndex((column) => column.id === newColumnId)

        BOARDS = produce(BOARDS, (draft) => {
            draft[boardId].columns = arrayMove(columns, oldIndex, newIndex)
        })
    },
    getTasksByBoardId: async (boardId: string) => {
        await delay(200)

        const columns = BOARDS[boardId].columns

        return columns.reduce<TaskDTO[]>((acc, { items }) => {
            items.forEach(({ id }) => {
                const task = ITEMS.find(({ id: taskId }) => taskId === id)
                if (task && !acc.some(({ id: taskId }) => taskId === id)) {
                    acc.push(task)
                }
            })

            return acc
        }, [])
    },
    getTasks: async () => {
        await delay(200)
        return ITEMS
    },
    updateBoard: async (board: Omit<BoardDTO, 'id'> & { id: string }) => {
        await delay(500)

        BOARDS = produce(BOARDS, (draft) => {
            draft[board.id] = board
        })
    },
    createBoard: async (board: Omit<BoardDTO, 'id' | 'columns'> & { columns: { title: string }[] }) => {
        await delay(200)

        const id = nanoid()

        BOARDS = produce(BOARDS, (draft) => {
            draft[id] = {
                id,
                ...(produce<Omit<BoardDTO, 'id' | 'columns'> & { columns: { title: string }[] }>(board, (d) => {
                    d.columns = board.columns.map(({ title }) => ({
                        id: nanoid(),
                        title,
                        items: [],
                    }))
                }) as Omit<BoardDTO, 'id'>),
            }
        })
    },
    getBoards: async (body?: { limit?: number; offset?: number; search?: string }) => {
        await delay(800)

        const boards = Object.values(BOARDS)

        if (!body)
            return {
                data: boards,
                offset: 0,
                limit: boards.length,
                count: boards.length,
            }

        if ('limit' in body && 'offset' in body && body.offset !== undefined && body.limit !== undefined) {
            return {
                data: boards.slice(body.offset, body.offset + body.limit),
                offset: body.offset,
                limit: body.limit,
                count: boards.length,
            }
        }

        if (
            'limit' in body &&
            'offset' in body &&
            'search' in body &&
            body.offset !== undefined &&
            body.limit !== undefined &&
            body.search !== undefined
        ) {
            return {
                data: boards.filter((board) => board.title.includes(body.search ?? '')),
                offset: body.offset,
                limit: body.limit,
                count: boards.length,
            }
        }
    },
    getUsers: async () => {
        await delay(500)
        return USERS
    },
    getManageRoles: async () => {
        await delay(500)

        return MANAGE_ROLES
    },
}
