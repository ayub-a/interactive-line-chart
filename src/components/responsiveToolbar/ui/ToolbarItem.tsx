import { useToolbarMode } from "../model/useToolbarMode"

interface ToolbarItemProps {
    menu: React.ReactNode
    inline: React.ReactNode
}

export const ToolbarItem = ({ menu, inline }: ToolbarItemProps) => {
    const mode = useToolbarMode()
    return mode === 'menu' ? <>{menu}</> : <>{inline}</>
}
