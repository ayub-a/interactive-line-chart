import React from "react";
import { MenuContext } from "./DropdownMenu";


export function useMenuOpen(handler: () => void) {
    const ctx = React.useContext(MenuContext)

    React.useEffect(() => {
        if (!ctx) return
        ctx.onOpen?.(handler)
    }, [ctx, handler])
}
