import { Button, type ButtonProps } from "../button/Button"

import ActiveIcon from '../../assets/active.svg?react'

import { clsnm } from "../../helpers/className"
import cl from './Checkbox.module.css'


interface CheckboxProps {
    title: string
    checked: boolean
    onChange: (value: boolean) => void
    containerVariant?: ButtonProps['style']
    controlVariant?: 'checkmark' | 'boxed'
    className?: string
    disabled?: boolean
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
    const { title, checked, onChange, containerVariant = 'outline', controlVariant = 'boxed', className = '', disabled } = props
    
    return (
        <Button 
            role='checkbox'
            aria-checked={checked}
            style={containerVariant} 
            className={clsnm('', [className], { [cl.checked]: checked, [cl.clear]: containerVariant === 'clear', })} 
            onClick={() => onChange(!checked)}
            disabled={disabled}
        >
            <span>{title}</span>

            <div className={clsnm(cl.box, [cl[controlVariant]])}>
                {checked && <ActiveIcon className={cl.icon}/>}
            </div>
        </Button>
    )
}
