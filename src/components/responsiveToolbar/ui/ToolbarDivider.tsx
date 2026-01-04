import { ToolbarItem } from "./ToolbarItem"


import cl from './ResponsiveToolbar.module.css'


export const ToolbarDivider = () => {
    return (
        <ToolbarItem
            inline={null}
            menu={<div className={cl.divider}/>}
        />
    )
}
