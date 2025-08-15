import { useSearchState } from '@/utils/helpers/states-hooks'

import Search from '@/components/ui/search'

const SearchInput = () => {
    const [search, setSearch] = useSearchState()

    return (
        <Search
            defaultValue={search ?? ''}
            className="w-[20rem] bg-background"
            onChange={setSearch}
        />
    )
}

export default SearchInput
