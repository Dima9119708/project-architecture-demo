import { TColumn } from '@/entities/board'
import { TManageRole } from '@/entities/manage-roles/model/types.ts'
import { TUser } from '@/entities/users/model/types.ts'

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
