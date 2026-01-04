import { Checkbox } from '../../checkbox/Checkbox'

import cl from './ActionDropdown.module.css'


interface ActionCheckboxProps {
    title: string
    checked: boolean
    onChange: (v: boolean) => void
}

export const ActionCheckbox = ({ title, checked, onChange }: ActionCheckboxProps) => {
    return (
        <Checkbox 
            title={title} 
            checked={checked} 
            onChange={() => onChange(checked)} 
            containerVariant='clear' 
            controlVariant='checkmark' 
            className={cl.item}
        />
    )
}
