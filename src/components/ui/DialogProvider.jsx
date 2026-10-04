import { useCallback, useMemo, useState } from 'react'
import { DialogContext } from './dialogStore'

export function DialogProvider({ children }) {
  const [dialog, setDialog] = useState(null)

  const openDialog = useCallback((name, payload = null) => setDialog({ name, payload }), [])
  const closeDialog = useCallback(() => setDialog(null), [])

  const value = useMemo(
    () => ({ dialog, openDialog, closeDialog, isOpen: (name) => dialog?.name === name }),
    [dialog, openDialog, closeDialog],
  )

  return <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
}