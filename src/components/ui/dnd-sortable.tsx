import { useSortable } from '@dnd-kit/sortable'
import { FC, FunctionComponent } from 'react'

export const DNDSortable: FC<{ children: FunctionComponent<ReturnType<typeof useSortable>>; id: string }> = (props) => {
    const sortable = useSortable({
        id: props.id,
        animateLayoutChanges: () => true,
    })

    return props.children(sortable)
}
