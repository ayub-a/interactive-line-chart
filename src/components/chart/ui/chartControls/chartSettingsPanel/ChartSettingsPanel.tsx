import { type PropsWithChildren } from "react"

import cl from './ChartSettingsPanel.module.css'


interface ChartSettingsPanelProps {
    className?: string
}


export const ChartSettingsPanel = ({ children, className }: PropsWithChildren<ChartSettingsPanelProps>) => {
    return <div className={`${cl.panel} ${className}`}>{children}</div>
}

ChartSettingsPanel.Left = ({ children }: PropsWithChildren) => {
    return <div className={cl.left}>{children}</div>
}

ChartSettingsPanel.Right = ({ children }: PropsWithChildren) => {
    return <div className={cl.right}>{children}</div>
}
