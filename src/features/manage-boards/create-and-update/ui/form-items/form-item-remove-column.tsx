import { useFieldArrayMethodsContext } from '@/shared/lib/form-field-array-provider.tsx'
import { Button } from '@/shared/ui/button.tsx'

interface FormItemRemoveColumnProps {
    index: number
    isSingle: boolean
}

const FormItemRemoveColumn = (props: FormItemRemoveColumnProps) => {
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

export default FormItemRemoveColumn
