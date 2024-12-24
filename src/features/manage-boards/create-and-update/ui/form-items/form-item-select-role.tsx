import { Controller, useWatch } from 'react-hook-form'

import { SelectManageRoles } from '@/entities/manage-roles'

interface FormItemSelectRoleProps {
    name: string
    formUserName: string
}

const FormItemSelectRole = (props: FormItemSelectRoleProps) => {
    const user = useWatch({
        name: props.formUserName,
    })

    return (
        !!user && (
            <Controller
                name={props.name}
                rules={{
                    required: 'Role is required',
                }}
                render={({ field, fieldState }) => (
                    <SelectManageRoles
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error?.message}
                    />
                )}
            />
        )
    )
}

export default FormItemSelectRole
