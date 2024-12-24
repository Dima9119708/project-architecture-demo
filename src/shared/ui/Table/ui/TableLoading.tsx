import { Spinner } from '@/shared/ui/spinner.tsx'

interface TableLoadingProps {
    isLoading: boolean
}

const TableLoading = (props: TableLoadingProps) => {
    const { isLoading } = props

    return isLoading && <Spinner overlay />
}

export default TableLoading
