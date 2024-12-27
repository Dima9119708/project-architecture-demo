import { useSearchState } from '@/entities/manage-boards'

import Search from '@/shared/ui/search.tsx'

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
