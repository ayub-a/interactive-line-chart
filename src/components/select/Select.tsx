import React from "react"

import { useClickOutside } from "../../hooks/useClickOutside"

import ArrowIcon from '../../assets/arrowNoStale.svg?react'
import { clsnm } from "../../helpers/className"

import { Button } from "../button/Button"

import cl from './Select.module.css'


interface SelectProps<T extends string | number> {
    options: T[]
    selected: T
    onChange: (value: T) => void
    placeholder?: string
    title?: string
    display?: 'title' | 'selected' | 'title & selected'
}


export const Select = <T extends string | number>(props: SelectProps<T>) => {
    const { options, selected, display = 'title', onChange, placeholder = 'Select option', title } = props

    const [isSelectOpen, setSelectOpen] = React.useState(false)

    const selectWrapperRef = React.useRef(null)

    useClickOutside(selectWrapperRef, () => setSelectOpen(false))

    const changeOptionHandler = (v: T) => {
        setSelectOpen(false)
        onChange(v)
    }

    return (
        <div className={cl.root} ref={selectWrapperRef}>
            <Button 
                className={clsnm(cl.trigger, [], { [cl.opened]: isSelectOpen })} 
                onClick={() => setSelectOpen(prev => !prev)}
                disabled={!options.length}
            >
                <span className={`${cl.text}`}>
                    {
                        display === 'title'
                        ? title || placeholder
                        : display === 'title & selected'
                        ? `${title || placeholder}: ${selected}`
                        : selected
                    }
                </span>
                
                <ArrowIcon height={15} width={15} className={clsnm(cl.icon, [], { [cl.active]: isSelectOpen })}/>
            </Button>

            <ul className={clsnm(cl.list, [], { [cl.show_list]: isSelectOpen })}>
                {
                    options.map(v => (
                        <li 
                            key={v || 0}
                            className={cl.option}
                            onClick={() => changeOptionHandler(v)}
                        >
                            <span>{v}</span>
                            <span className={clsnm(cl.radio, [], { [cl.selected]: selected === v })}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
