import { Plus } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { useFieldArrayMethodsContext } from '@/shared/lib/form-field-array-provider.tsx'
import { Button } from '@/shared/ui/button.tsx'

import { TFormManageBoardCreate, TFormManageBoardUpdate } from '../../model/form-manage-board-types.ts'

const FormItemAddColumn = (props: { lastIndex: number }) => {
    const { append } = useFieldArrayMethodsContext()
    const { trigger } = useFormContext<TFormManageBoardUpdate | TFormManageBoardCreate>()

    return (
        <Button
            variant="outline"
            onClick={async () => {
                const pathColumn: `columns.${number}.title` = `columns.${props.lastIndex}.title`

                const valid = await trigger([pathColumn])

                if (!valid) return

                append({})
            }}
        >
            <Plus />
            Add
        </Button>
    )
}

export default FormItemAddColumn
