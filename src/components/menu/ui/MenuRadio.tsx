import { clsnm } from '../../../helpers/className'
import cl from './Menu.module.css'


interface MenuRadioProps extends React.PropsWithChildren {
    title: string
    selected: string
    onChange: () => void
}


export const MenuRadio = (props: MenuRadioProps) => {
    const { title, selected, onChange } = props

    return (
        <li className={cl.radio} onClick={onChange}>
            <span>{title}</span>
            <span className={clsnm(cl.radio_box, [], { [cl.selected]: selected === title })}/>
        </li>
    )
}
