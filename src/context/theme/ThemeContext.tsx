import React from "react"


export const LOCAL_STORAGE_THEME_KEY = 'theme'


export const THEME_OPTIONS = {
    LIGHT: 'light',
    DARK: 'dark'
} as const

export type ThemeOptions = typeof THEME_OPTIONS[keyof typeof THEME_OPTIONS]


interface ContextProps {
    theme: ThemeOptions
    changeTheme: () => void
}

export const ThemeContext = React.createContext<ContextProps | undefined>(undefined)
