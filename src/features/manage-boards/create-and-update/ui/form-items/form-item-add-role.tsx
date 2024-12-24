import { Plus } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { useFieldArrayMethodsContext } from '@/shared/lib/form-field-array-provider.tsx'
import { Button } from '@/shared/ui/button.tsx'

import { TFormManageBoardCreate, TFormManageBoardUpdate } from '../../model/form-manage-board-types.ts'

const FormItemAddRole = (props: { lastIndex: number }) => {
    const { append } = useFieldArrayMethodsContext()
    const { trigger } = useFormContext<TFormManageBoardUpdate | TFormManageBoardCreate>()

    return (
        <Button
            variant="outline"
            onClick={async () => {
                const pathUserName: `project_access.${number}.user` = `project_access.${props.lastIndex}.user`
                const pathRoleName: `project_access.${number}.role` = `project_access.${props.lastIndex}.role`

                const valid = await trigger([pathUserName, pathRoleName])

                if (!valid) return

                append({})
            }}
        >
            <Plus />
            Add
        </Button>
    )
}

export default FormItemAddRole
