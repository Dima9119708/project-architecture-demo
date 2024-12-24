import { UseControlledProps, UsePaginationItem, UsePaginationProps, UsePaginationResult } from './usePagination.types.ts'
import React, { useRef, useState } from 'react'

function useControlled({ controlled, default: defaultProp }: UseControlledProps<number>): [number, (value: number) => void] {
    const { current: isControlled } = useRef(controlled !== undefined)
    const [valueState, setValue] = useState(defaultProp)
    const value = isControlled ? controlled : valueState

    const setValueIfUncontrolled = React.useCallback((newValue: number) => {
        if (!isControlled) {
            setValue(newValue)
        }
    }, [])

    return [value ?? 1, setValueIfUncontrolled]
}

export default function usePagination(props: UsePaginationProps): UsePaginationResult {
    const {
        boundaryCount = 1,
        count = 1,
        defaultPage = 1,
        disabled = false,
        hideNextButton = false,
        hidePrevButton = false,
        onChange: handleChange,
        page: pageProp,
        showFirstButton = false,
        showLastButton = false,
        siblingCount = 1,
        ...other
    } = props

    const [page, setPageState] = useControlled({
        controlled: pageProp,
        default: defaultPage,
    })

    const handleClick: UsePaginationProps['onChange'] = (event, value) => {
        if (!pageProp) {
            setPageState(value)
        }
        if (handleChange) {
            handleChange(event, value)
        }
    }

    const range = (start: number, end: number) => {
        const length = end - start + 1
        return Array.from({ length }, (_, i) => start + i)
    }

    const startPages = range(1, Math.min(boundaryCount, count))
    const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count)

    const siblingsStart = Math.max(Math.min(page - siblingCount, count - boundaryCount - siblingCount * 2 - 1), boundaryCount + 2)

    const siblingsEnd = Math.min(Math.max(page + siblingCount, boundaryCount + siblingCount * 2 + 2), count - boundaryCount - 1)

    const itemList = [
        ...(showFirstButton ? ['first'] : []),
        ...(hidePrevButton ? [] : ['previous']),
        ...startPages,

        // Start ellipsis

        ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),

        // Sibling pages
        ...range(siblingsStart, siblingsEnd),

        // End ellipsis

        ...(siblingsEnd < count - boundaryCount - 1
            ? ['end-ellipsis']
            : count - boundaryCount > boundaryCount
              ? [count - boundaryCount]
              : []),

        ...endPages,
        ...(hideNextButton ? [] : ['next']),
        ...(showLastButton ? ['last'] : []),
    ]

    // Map the button type to its page number
    const buttonPage = (type: UsePaginationItem['type'] | string | number) => {
        switch (type) {
            case 'first':
                return 1
            case 'previous':
                return page - 1
            case 'next':
                return page + 1
            case 'last':
                return count
            default:
                return null
        }
    }

    // Convert the basic item list to PaginationItem props objects
    const items = itemList.map((item) => {
        return typeof item === 'number'
            ? {
                  onClick: (event: HTMLLIElement) => {
                      handleClick(event, item)
                  },
                  type: 'page',
                  page: item,
                  selected: item === page,
                  disabled,
                  'aria-current': item === page ? 'page' : undefined,
              }
            : {
                  onClick: (event: HTMLLIElement) => {
                      handleClick(event, buttonPage(item))
                  },
                  type: item,
                  page: buttonPage(item),
                  selected: false,
                  disabled: disabled || (!item.includes('ellipsis') && (item === 'next' || item === 'last' ? page >= count : page <= 1)),
              }
    })

    return {
        items,
        ...other,
    }
}
