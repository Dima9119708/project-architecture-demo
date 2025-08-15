import { Spinner } from '@/components/ui/spinner.tsx'

interface TableLoadingProps {
    isLoading: boolean
}

const TableLoading = (props: TableLoadingProps) => {
    const { isLoading } = props

    return isLoading && <Spinner overlay />
}

export default TableLoading
