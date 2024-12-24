import { Controller } from 'react-hook-form'

import { Input } from '@/shared/ui/input.tsx'

interface FormItemInputColumnProps {
    name: string
}

const FormItemInputColumn = (props: FormItemInputColumnProps) => {
    return (
        <Controller
            name={props.name}
            rules={{
                required: 'Column name is required',
            }}
            render={({ field, fieldState }) => (
                <Input
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Column name..."
                    error={fieldState.error?.message}
                />
            )}
        />
    )
}

export default FormItemInputColumn
