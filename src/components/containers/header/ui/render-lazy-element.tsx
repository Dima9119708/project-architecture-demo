import React, { memo, useLayoutEffect, useState } from 'react'

import { ItemConfig, LazyItemConfig } from '../lib/configure'
import { RenderLink } from './render-link'

export const RenderLazyElement = memo(
    (props: { isCurrentPath: boolean; onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void } & ItemConfig) => {
        const lazyFN = props.lazy

        const [isLoading, setLoading] = useState(() => !!props.lazy)
        const [lazyData, setLazyData] = useState<LazyItemConfig | null>(null)

        useLayoutEffect(() => {
            ;(async () => {
                const lazyData = await lazyFN?.()

                if (lazyData) {
                    setLazyData(lazyData)
                }

                setLoading(false)
            })()
        }, [lazyFN])

        if (isLoading) {
            return props.fallback
        }

        if (lazyData) {
            return (
                <RenderLink
                    {...props}
                    {...lazyData}
                    name={lazyData.name ?? props.name}
                    isCurrentPath={props.isCurrentPath}
                    path={props.path}
                />
            )
        }
    }
)
