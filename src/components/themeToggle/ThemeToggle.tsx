import React from "react"

import { Button } from "../button/Button"
import { ThemeContext } from "../../context/theme"

import DarkTheme from '../../assets/moon.svg?react'
import LightTheme from '../../assets/sun.svg?react'
import { ToolbarItem } from "../responsiveToolbar/ui/ToolbarItem"

import cl from './ThemeToggle.module.css'
import { clsnm } from "../../helpers/className"


export const ThemeToggle = () => {
    const { theme, changeTheme} = React.useContext(ThemeContext)!
    
    return (
        <ToolbarItem
            inline={
                <Button style="clear" className={cl.root} onClick={changeTheme}>
                    {
                        theme === 'light'
                        ? <DarkTheme className={cl.icon}/>
                        : <LightTheme className={cl.icon}/>
                    }
                </Button>
            }

            menu={
                <Button style="clear" className={clsnm(cl.root, [cl.mode_menu])} onClick={changeTheme}>
                    <span>Theme</span>
                    {
                        theme === 'light'
                        ? <DarkTheme className={cl.icon}/>
                        : <LightTheme className={cl.icon}/>
                    }
                </Button>
            }
        />
    )
}
