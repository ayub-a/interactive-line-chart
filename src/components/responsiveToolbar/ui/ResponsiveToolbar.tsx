import React from "react"

import type { ToolbarMode } from "../model/types"

import { useWindowResize } from "../../../hooks/useWindowResize"
import { ToolbarContext } from "../model/ToolbarContext"
import { DropdownMenu } from "./dropdownMenu/DropdownMenu"

import cl from './ResponsiveToolbar.module.css'


interface ResponsiveToolbarProps extends React.PropsWithChildren {
    collapseAt: number
    menuTitle?: string | React.ReactNode
    reverseMenu?: boolean
}


export const ResponsiveToolbar = ({ children, collapseAt = 900, menuTitle, reverseMenu }: ResponsiveToolbarProps) => {
    const [isMenu, setIsMenu] = React.useState(false)
    
    useWindowResize(({ width }) => setIsMenu(width < collapseAt))
    
    const mode: ToolbarMode = isMenu ? 'menu' : 'inline'
    
    return (
        <ToolbarContext.Provider value={mode}>
            {
                mode === 'inline'
                ? <div className={cl.toolbar}>{children}</div>
                : <DropdownMenu menuTitle={menuTitle} reverseMenu={reverseMenu}>{children}</DropdownMenu>
            }
        </ToolbarContext.Provider>
    )
}
