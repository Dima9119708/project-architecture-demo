import { createContext, useContext } from 'react'

export const FormManageBoardContext = createContext('')

export const useFormManageBoardContext = () => useContext(FormManageBoardContext)
