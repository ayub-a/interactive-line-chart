import { Checkbox } from "../../checkbox/Checkbox"

import cl from './Menu.module.css'

interface MenuCheckboxProps {
    title: string
    checked: boolean
    onChange: () => void
    disabled?: boolean
}

export const MenuCheckbox = ({ title, checked, onChange, disabled }: MenuCheckboxProps) => {

    return (
        <Checkbox 
            title={title} 
            checked={checked} 
            onChange={onChange} 
            className={cl.checkbox} 
            containerVariant='clear' 
            controlVariant='checkmark'
            disabled={disabled}
        />
    )
}
