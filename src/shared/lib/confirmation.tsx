import { FC, PropsWithChildren, useState } from 'react'

import { Button } from '@/shared/ui/button.tsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/shared/ui/popover.tsx'

interface ConfirmationProps {
    title: string
    onConfirm: () => void
}

export const Confirmation: FC<PropsWithChildren<ConfirmationProps>> = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Popover
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <PopoverTrigger>{props.children}</PopoverTrigger>
            <PopoverContent>
                <div className="font-semibold tracking-tight text">{props.title}</div>

                <div className="flex gap-1 justify-end">
                    <Button
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                            setIsOpen(false)
                        }}
                    >
                        Отмена
                    </Button>
                    <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => {
                            setIsOpen(false)
                            props.onConfirm()
                        }}
                    >
                        Да
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}
