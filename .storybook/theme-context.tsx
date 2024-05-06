import React, { createContext, useContext, useState } from 'react'

interface ThemeContextProps {
  theme: string
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextProps | null>(null)

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
