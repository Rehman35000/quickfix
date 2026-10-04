import { createContext, useContext } from 'react'

export const DialogContext = createContext(null)

export function useDialogs() {
  const context = useContext(DialogContext)
  if (!context) throw new Error('useDialogs must be used inside DialogProvider')
  return context
}