import React from "react"
import { LOCAL_STORAGE_THEME_KEY, THEME_OPTIONS, ThemeContext, type ThemeOptions } from "./ThemeContext"


export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
    const [theme, setTheme] = React.useState<ThemeOptions>(() => 
        localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeOptions || THEME_OPTIONS.LIGHT)


    const changeTheme = () => {
        const newTheme = theme === THEME_OPTIONS.LIGHT 
            ? THEME_OPTIONS.DARK 
            : THEME_OPTIONS.LIGHT

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider value={{ theme, changeTheme }}>
            <div data-theme={theme} className={theme}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
