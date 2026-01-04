import React from "react"

import { useClickOutside } from "../../hooks/useClickOutside"
import { getMultiSelectLabel } from "./helpers/getMultiSelectLabel"

import Arrow from '../../assets/arrowNoStale.svg?react'
import ActiveIcon from '../../assets/active.svg?react'
import { clsnm } from "../../helpers/className"

import { Button } from "../button/Button"

import cl from './MultiSelect.module.css'


export type SelectOption = { id: string | number, name: string }


interface MultiSelectProps<T extends SelectOption = SelectOption> {
    options: T[]
    selected: T[]
    onChange: (values: T) => void
    placeholder?: string
}


export const MultiSelect = <T extends SelectOption>(props: MultiSelectProps<T>) => {
    const { options, selected, onChange, placeholder } = props
    
    const [isSelectOpen, setSelectOpen] = React.useState(false)

    const selectWrapperRef = React.useRef(null)

    useClickOutside(selectWrapperRef, () => setSelectOpen(false))

    const label = getMultiSelectLabel(selected, options, placeholder)
    
    return (
        <div className={cl.root} ref={selectWrapperRef}>
            <Button 
                className={clsnm(cl.trigger, [], { [cl.opened]: isSelectOpen })} 
                onClick={() => setSelectOpen(prev => !prev)}
                disabled={!options.length}
            >
                <span className={`${cl.text}`}>{label}</span>
                <Arrow height={15} width={15} className={clsnm(cl.icon, [], { [cl.active]: isSelectOpen })} /> 
            </Button>

            <ul className={clsnm(cl.list, [], { [cl.show_list]: isSelectOpen })}>
                {
                    options.map(v => (
                        <li 
                            key={v.id || 0}
                            className={cl.option}
                            onClick={() => onChange(v)}
                        >
                            <span>{v.name}</span>
                            {selected.includes(v) && <ActiveIcon className={cl.icon}/>}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
