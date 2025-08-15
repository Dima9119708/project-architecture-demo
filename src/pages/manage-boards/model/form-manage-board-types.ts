import { TColumn } from '@/entities/board'
import { TManageRole } from '@/entities/manage-roles'
import { TUser } from '@/entities/users'

export type TFormManageBoardCreate = {
    title: string
    description: string
    board_access: 'open' | 'private'
    project_access: {
        user: TUser
        role: TManageRole
    }[]
    columns: {
        title: string
    }[]
}

export type TFormManageBoardUpdate = {
    title: string
    description: string
    board_access: 'open' | 'private'
    project_access: {
        user: TUser
        role: TManageRole
    }[]
    columns: TColumn<{ id: string }[]>[]
}
