import { createContext, useState } from 'react'

const themes = {
  dark: {
    backgroundColor: '#2f2f2f',
    color: '#fcf5eb',
  },
  light: {
    backgroundColor: '#fcf5eb',
    color: '#2f2f2f',
  },
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const theme = isDark ? themes.dark : themes.light

  const toggleTheme = () => {
    setIsDark(!isDark)
  }
  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}
