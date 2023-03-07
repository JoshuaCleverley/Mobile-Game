import * as React from 'react'

// Context to store dark/light mode
export const DarkModeContext = React.createContext({
  isDarkMode: false,
  setIsDarkMode: (value: boolean) => {},
})
