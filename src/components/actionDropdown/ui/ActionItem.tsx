import cl from './ActionDropdown.module.css'


interface ActionItemProps {
    title: string
    onClick: () => void
}

export const ActionItem = ({title, onClick}: ActionItemProps) => {
    return (
        <li onClick={onClick} className={cl.item}>
            {title}
        </li>
    )
}
