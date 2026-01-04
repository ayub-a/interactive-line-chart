import { Button } from '../../button/Button'
import cl from './Menu.module.css'

interface MenuItem {
    title: string
    onClick: () => void
    disabled?: boolean
}

export const MenuItem = ({ title, onClick, disabled = false }: MenuItem) => {

    return (
        <Button 
            role='listitem'
            style='clear' 
            className={cl.item}
            onClick={onClick}
            disabled={disabled}
        >
            <span>{title}</span>
        </Button>
    )
}
