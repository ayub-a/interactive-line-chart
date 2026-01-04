import type { PropsWithChildren } from "react"

import cl from './ActionDropdown.module.css'


interface ActionGroupProps extends PropsWithChildren {
    title?: string
}

export const ActionGroup = ({ title, children }: ActionGroupProps) => {

    return (
        <li>
            {title ? <span className={cl.group_title}>{title}</span> : null}
            
            <ul className={cl.group_list}>
                {children}
            </ul>
        </li>
    )
}
