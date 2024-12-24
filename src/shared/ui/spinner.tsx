import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import React from 'react'

import { cn } from '@/shared/lib/utils'

const spinnerVariants = cva('flex-col items-center justify-center', {
    variants: {
        show: {
            true: 'flex',
            false: 'hidden',
        },
        overlay: {
            true: 'absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center',
        },
    },
    defaultVariants: {
        show: true,
    },
})

const loaderVariants = cva('animate-spin text-primary', {
    variants: {
        size: {
            small: 'size-6',
            medium: 'size-8',
            large: 'size-12',
        },
    },
    defaultVariants: {
        size: 'medium',
    },
})

interface SpinnerContentProps extends VariantProps<typeof spinnerVariants>, VariantProps<typeof loaderVariants> {
    className?: string
    children?: React.ReactNode
}

export function Spinner({ size, show, children, className, overlay }: SpinnerContentProps) {
    return (
        <div className={spinnerVariants({ show, overlay })}>
            <Loader2 className={cn(loaderVariants({ size }), className)} />
            {children}
        </div>
    )
}
