import * as React from 'react'

const TableContext = React.createContext('')

export const useTableContext = () => React.useContext(TableContext)

export const TableContextProvider = TableContext.Provider
