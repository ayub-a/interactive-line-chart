import type React from "react"

import { clsnm } from "../../helpers/className"
import cl from './Button.module.css'


export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'ref'> {
    style?: 'outline' | 'clear'
    ref?: React.Ref<HTMLButtonElement>
    gap?: number | string
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', style = 'outline', gap, ref, disabled = false, ...props }) => {
    return (
        <button 
            ref={ref} 
            style={{ gap }} 
            className={clsnm(cl.root, [className, cl[style]], { [cl.disabled]: disabled })} 
            disabled={disabled}
            {...props}
        >
            { children }
        </button>
    )
}
