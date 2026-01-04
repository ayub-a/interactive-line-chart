import React from "react"
import { autoUpdate, flip, offset, shift, useFloating } from "@floating-ui/react"

import ArrowIcon from '../../../../assets/arrowNoStale.svg?react'

import { useClickOutside } from "../../../../hooks/useClickOutside"
import { Button } from "../../../button/Button"

import cl from './DropdownMenu.module.css'
import { clsnm } from "../../../../helpers/className"


type MenuContextValue = {
    onOpen?: (fn: () => void) => void
}

export const MenuContext = React.createContext<MenuContextValue | null>(null)

interface DropdownMenuProps extends React.PropsWithChildren {
    menuTitle?: string | React.ReactNode
    reverseMenu?: boolean
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ menuTitle = 'Menu', reverseMenu = false, children }) => {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)
    
    const menuRef = React.useRef(null)
    const subscribers = React.useRef<(() => void)[]>([])

    
    useClickOutside(menuRef, () => setMenuIsOpen(false))


    const { refs, floatingStyles } = useFloating({
        placement: 'bottom-start',
        middleware: [
            offset(5),
            flip(),
            shift({ padding: 15 })
        ],
        whileElementsMounted: autoUpdate,
    })


    const contextValue: MenuContextValue = React.useMemo(() => ({
        onOpen: (fn) => subscribers.current.push(fn)
    }), [])



    React.useEffect(() => {
        if (menuIsOpen) subscribers.current.forEach(fn => fn())
    }, [menuIsOpen])


    return (
        <div ref={menuRef} className={cl.root}>
            <Button 
                ref={refs.setReference} 
                className={clsnm(cl.trigger, [], { [cl.opened]: menuIsOpen })} 
                onClick={() => setMenuIsOpen(prev => !prev)}
            >
                {
                    typeof menuTitle === 'string'
                    ?
                    <>
                        <span>{menuTitle}</span>
                        <ArrowIcon height={15} width={15} className={clsnm(cl.icon, [], { [cl.active]: menuIsOpen })}/>
                    </>
                    : 
                    menuTitle
                }
            </Button>

            <div 
                ref={refs.setFloating} 
                style={floatingStyles} 
                className={clsnm(cl.children, [], { [cl.show_menu]: menuIsOpen, [cl.reverseMenu]: reverseMenu })}
            >
                <MenuContext.Provider value={contextValue}>
                    {children ?? <Button style="clear">NO CHILDREN</Button>}
                </MenuContext.Provider>
            </div>
        </div>
    )
}
