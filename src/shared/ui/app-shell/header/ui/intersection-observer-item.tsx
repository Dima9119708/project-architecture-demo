import { ReactNode, memo, useCallback, useState } from 'react'

import { cn } from '@/shared/lib/utils.ts'

export const IntersectionObserverItem = memo(
    (props: {
        children: ReactNode
        className?: string
        path: string
        enabled: boolean
        onView: (path: string, isVisible: boolean) => void
    }) => {
        const { onView, path, enabled } = props
        const [isVisible, setVisible] = useState(true)

        const onIntersectionObserver = useCallback(
            (instance: HTMLDivElement | null) => {
                if (!instance || enabled === false) return

                const observer = new IntersectionObserver(
                    ([{ isIntersecting }]) => {
                        onView(path, isIntersecting)
                        setVisible(isIntersecting)
                    },
                    {
                        threshold: 1.0,
                    }
                )

                observer.observe(instance)

                return () => observer.disconnect()
            },
            [onView, path, enabled]
        )

        return (
            <div
                ref={onIntersectionObserver}
                className={cn('transition-opacity', props.className, { 'opacity-0': !isVisible })}
            >
                {props.children}
            </div>
        )
    }
)
