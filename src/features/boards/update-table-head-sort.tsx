import { ComponentProps, FC } from 'react'

import { useSortState } from '@/entities/manage-boards'

import { SortDirection, TableHeadSortController } from '@/shared/ui/Table'

const SortableColumnHead: FC<ComponentProps<typeof TableHeadSortController>> = (props) => {
    const [sort, setSort] = useSortState()

    const [name, sortDirection] = sort

    return (
        <TableHeadSortController
            {...props}
            initialActive={name ? name === props.name : props.initialActive}
            initialState={name === props.name ? sortDirection : SortDirection.Descending}
            onChange={(name, state) => setSort([name, state])}
        />
    )
}

export default SortableColumnHead
