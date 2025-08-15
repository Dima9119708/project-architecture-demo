export interface TColumn<T> {
    id: string
    title: string
    items: T
}

export type TBoard<T = { id: string }[]> = {
    id: string
    title: string
    columns: TColumn<T>[]
}
