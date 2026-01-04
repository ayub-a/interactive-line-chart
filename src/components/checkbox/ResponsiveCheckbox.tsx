import { ToolbarItem } from "../responsiveToolbar/ui/ToolbarItem"
import { Checkbox } from "./Checkbox"

import cl from './Checkbox.module.css'


interface ResponsiveCheckboxProps {
    title: string
    checked: boolean
    onChange: (value: boolean) => void
}


export const ResponsiveCheckbox = ({title, checked, onChange}: ResponsiveCheckboxProps) => {

    return (
        <ToolbarItem
            inline={<Checkbox title={title} checked={checked} onChange={onChange}/>}
            menu={<Checkbox title={title} checked={checked} onChange={onChange} containerVariant='clear' controlVariant='checkmark' className={cl.hover}/>}
        />
    )
}
