import { Plus } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import { TFormManageBoardCreate, TFormManageBoardUpdate } from '@/pages/manage-boards/model/form-manage-board-types.ts'

import { useFieldArrayMethodsContext } from '@/components/providers/form-field-array-provider.tsx'
import { Button } from '@/components/ui/button.tsx'

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
