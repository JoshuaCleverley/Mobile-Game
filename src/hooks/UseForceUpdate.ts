import { useState } from 'react'

export function useForceUpdate() {
  // Hook to enable a component to force a refresh.
  const [value, setValue] = useState(0)
  return () => setValue(value => value + 1)
}
