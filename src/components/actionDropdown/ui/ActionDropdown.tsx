import React, { type PropsWithChildren } from 'react'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react-dom'

import MoreIcon from '../../../assets/more.svg?react'

import { clsnm } from '../../../helpers/className'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { Button } from '../../button/Button'

import cl from './ActionDropdown.module.css'


interface ActionDropdownProps extends PropsWithChildren {
    label: string
    onOpen?: () => void
    className?: string
    disabled?: boolean
}

export const ActionDropdown = ({ label, children, onOpen, disabled }: ActionDropdownProps) => {
    const [open, setOpen] = React.useState(false)
    const selectWrapperRef = React.useRef(null)


    useClickOutside(selectWrapperRef, () => setOpen(false))


    const { refs, floatingStyles } = useFloating({
        placement: 'bottom-start',
        middleware: [
            offset(5),
            flip(),
            shift({ padding: 15 })
        ],
        whileElementsMounted: autoUpdate,
    })


    React.useEffect(() => {
        if (open) onOpen?.()
    }, [open])

    
    return (
        <div className={cl.root} ref={selectWrapperRef}>
            <Button
                ref={refs.setReference} 
                className={clsnm('', [], { [cl.opened]: open })} 
                onClick={() => setOpen(prev => !prev)}
                disabled={disabled}
            >
                <span className={cl.label}>{label}</span>
                <MoreIcon className={cl.icon}/>
            </Button>

            <ul 
                ref={refs.setFloating} 
                style={floatingStyles} 
                className={clsnm(cl.list, [], { [cl.show_list]: open })}
            >
                {children ?? <Button style="clear">NO CHILDREN</Button>}
            </ul>
        </div>
    )
}
