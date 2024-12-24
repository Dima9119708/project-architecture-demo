import * as React from 'react'
import { useEffect, useRef } from 'react'

import { cn } from '@/shared/lib/utils.ts'
import { TableLoading } from '@/shared/ui/Table'

export const Table = React.forwardRef<
    HTMLTableElement,
    {
        isLoading?: boolean
        rootClassName?: string
        tableClassName?: string
        onCalculateBodyRowCount?: (bodyRowCount: number) => void
    } & React.HTMLAttributes<HTMLTableElement>
>(({ onCalculateBodyRowCount, isLoading, ...props }, ref) => {
    const wrapperTableRef = useRef<HTMLTableSectionElement>(null)

    const onCalculateBodyRowCountRef = useRef(onCalculateBodyRowCount)

    onCalculateBodyRowCountRef.current = onCalculateBodyRowCount

    useEffect(() => {
        if (!wrapperTableRef.current || !onCalculateBodyRowCountRef.current) return

        let currentBodyRowCount = 0

        const resizeObserver = new ResizeObserver((entries) => {
            const entry = entries[0]

            const FULL_HEIGHT = entry.target.clientHeight // <div /> => <table />
            const HEAD_HEIGHT = entry.target.children[0].children[0].clientHeight // <div /> =>  <table /> => <thead />
            const ROW_HEIGHT = entry.target.children[0].children[1].children[0].clientHeight // <div /> => <table /> => <tbody /> => <tr />

            const BODY_HEIGHT = FULL_HEIGHT - HEAD_HEIGHT - ROW_HEIGHT
            const BODY_COUNT_ROWS = Math.floor(BODY_HEIGHT / ROW_HEIGHT)

            if (currentBodyRowCount !== BODY_COUNT_ROWS) {
                onCalculateBodyRowCountRef.current?.(BODY_COUNT_ROWS)
                currentBodyRowCount = BODY_COUNT_ROWS
            }
        })

        resizeObserver.observe(wrapperTableRef.current)

        return () => {
            resizeObserver.disconnect()
        }
    }, [onCalculateBodyRowCountRef])

    return (
        <div
            ref={wrapperTableRef}
            className={cn('relative w-full overflow-auto flex-1', props.rootClassName)}
        >
            <table
                ref={ref}
                className={cn('w-full caption-bottom text-sm', props.tableClassName)}
                {...props}
            />

            <TableLoading isLoading={isLoading ?? false} />
        </div>
    )
})

Table.displayName = 'Table'
