import { createContext, useState } from 'react'

const themes = {
  dark: {
    backgroundColor: '#1f1f1f',
    color: '#fcf5eb',
  },
  light: {
    backgroundColor: '#fcf5eb',
    color: '#1f1f1f',
  },
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
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
