import type { PropsWithChildren } from "react"

import cl from './Menu.module.css'


interface MenuGroupProps extends PropsWithChildren {
    title?: string
}

export const MenuGroup = ({ title, children }: MenuGroupProps) => {

    return (
        <li>
            {title ? <span className={cl.group_title}>{title}</span> : null}
            
            <ul className={cl.group_list}>
                {children ?? <span>NO CHILDREN</span>}
            </ul>
        </li>
    )
}
