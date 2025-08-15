import { FunctionComponent, createContext, useContext, useMemo } from 'react'
import { useFieldArray } from 'react-hook-form'

interface FormFieldArrayProviderProps {
    name: string
    children: FunctionComponent<{ fields: ReturnType<typeof useFieldArray>['fields'] }>
}

const Context = createContext<Omit<ReturnType<typeof useFieldArray>, 'fields'>>({} as Omit<ReturnType<typeof useFieldArray>, 'fields'>)

export const useFieldArrayMethodsContext = () => useContext(Context)

export const FormFieldArrayProvider = (props: FormFieldArrayProviderProps) => {
    const { fields, append, prepend, remove, swap, move, insert, replace, update } = useFieldArray({
        name: props.name,
    })

    const memoMethods = useMemo(
        () => ({ append, prepend, remove, swap, move, insert, replace, update }),
        [append, prepend, remove, swap, move, insert, replace, update]
    )

    return <Context.Provider value={memoMethods}>{props.children({ fields })}</Context.Provider>
}

export default FormFieldArrayProviderProps
