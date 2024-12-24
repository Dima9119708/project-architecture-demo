import { useEffect, useRef, useState } from 'react'
import { useDebounce } from 'use-debounce'

import { Input } from '@/shared/ui/input.tsx'

interface SeachProps {
    className?: string
    defaultValue?: string
    onChange: (value: string) => void
}

const Search = (props: SeachProps) => {
    const { className, onChange, defaultValue = '' } = props

    const init = useRef(false)

    const onChangeRef = useRef(onChange)
    onChangeRef.current = onChange

    const [inputValue, setInputValue] = useState(defaultValue)
    const [debouncedValue] = useDebounce(inputValue, 1000)

    useEffect(() => {
        if (init.current) {
            onChangeRef.current(debouncedValue)
        }

        return () => {
            init.current = true
        }
    }, [debouncedValue])

    return (
        <Input
            className={className}
            value={inputValue}
            placeholder="Search..."
            onChange={(event) => setInputValue(event.target.value)}
        />
    )
}

export default Search
