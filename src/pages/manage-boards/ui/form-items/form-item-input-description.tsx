import { Controller } from 'react-hook-form'

import { Input } from '@/components/ui/input.tsx'

const FormItemInputDescription = () => {
    return (
        <Controller
            name="description"
            render={({ field }) => (
                <div className="grid gap-2">
                    <Input
                        id="description"
                        type="text"
                        label="Description"
                        placeholder="Description"
                        required
                        {...field}
                    />
                </div>
            )}
        />
    )
}

export default FormItemInputDescription
