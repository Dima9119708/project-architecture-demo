import { Controller } from 'react-hook-form'

import { SelectUsers } from '@/entities/users'

interface FormSelectUserProps {
    name: string
}

export const FormItemSelectUser = (props: FormSelectUserProps) => {
    return (
        <Controller
            name={props.name}
            rules={{
                required: 'User is required',
            }}
            render={({ field, fieldState }) => (
                <SelectUsers
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                />
            )}
        />
    )
}

export default FormItemSelectUser
