import { Lock, LockOpen } from 'lucide-react'
import { Controller } from 'react-hook-form'

import { Label } from '@/shared/ui/label.tsx'
import { RadioGroup, RadioGroupItem } from '@/shared/ui/radio-group.tsx'

const FormItemBoardAccess = () => {
    return (
        <Controller
            name="board_access"
            render={({ field }) => (
                <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                >
                    <div className="text font-bold">Access</div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="open"
                            id="open"
                        />
                        <Label
                            className="flex items-center gap-x-2"
                            htmlFor="open"
                        >
                            <LockOpen className="h-[1.25rem] w-[1.25rem]" />
                            Open
                        </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem
                            value="private"
                            id="private"
                        />
                        <Label
                            className="flex items-center gap-x-2"
                            htmlFor="private"
                        >
                            <Lock className="h-[1.25rem] w-[1.25rem]" />
                            Private
                        </Label>
                    </div>
                </RadioGroup>
            )}
        />
    )
}

export default FormItemBoardAccess
