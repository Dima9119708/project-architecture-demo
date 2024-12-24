import { memo } from 'react'
import { Controller } from 'react-hook-form'

import { Input } from '@/shared/ui/input.tsx'

const FormItemInputTitle = () => {
    return (
        <Controller
            name="title"
            rules={{
                required: 'Title is required',
            }}
            render={({ field, fieldState }) => (
                <Input
                    type="text"
                    placeholder="Title"
                    label="Title"
                    required
                    {...field}
                    error={fieldState.error?.message}
                />
            )}
        />
    )
}

export default memo(FormItemInputTitle)
