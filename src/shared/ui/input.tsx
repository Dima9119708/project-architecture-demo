import * as React from 'react'
import { useId } from 'react'

import { cn } from '@/shared/lib/utils'
import { Label } from '@/shared/ui/label.tsx'
import UIError from '@/shared/ui/ui-error.tsx'

const Input = React.forwardRef<HTMLInputElement, { label?: string; error?: string } & React.ComponentProps<'input'>>(
    ({ className, type, ...props }, ref) => {
        const id = useId()

        return (
            <div className="grid gap-1">
                {props.label && <Label htmlFor={id}>{props.label}</Label>}
                <input
                    type={type}
                    className={cn(
                        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                        className,
                        props.error && 'border-destructive'
                    )}
                    ref={ref}
                    {...props}
                    id={id}
                />

                {props.error && <UIError>{props.error}</UIError>}
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
