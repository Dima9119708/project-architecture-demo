import { Controller } from 'react-hook-form'

import { SelectUsersByRoles } from '@/entities/users'

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
                <SelectUsersByRoles
                    value={field.value}
                    onChange={field.onChange}
                    error={fieldState.error?.message}
                />
            )}
        />
    )
}

export default FormItemSelectUser
