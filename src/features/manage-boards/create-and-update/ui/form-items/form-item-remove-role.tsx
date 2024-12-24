import { useFieldArrayMethodsContext } from '@/shared/lib/form-field-array-provider.tsx'
import { Button } from '@/shared/ui/button.tsx'

interface FormItemRoleRemoveProps {
    index: number
    isSingle: boolean
}

const FormItemRemoveRole = (props: FormItemRoleRemoveProps) => {
    const { remove } = useFieldArrayMethodsContext()

    return props.isSingle ? null : (
        <Button
            size="sm"
            variant="link"
            onClick={() => remove(props.index)}
        >
            Remove
        </Button>
    )
}

export default FormItemRemoveRole
