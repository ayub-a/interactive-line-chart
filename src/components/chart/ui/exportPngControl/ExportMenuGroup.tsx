import { MenuCheckbox, MenuDivider, MenuGroup, MenuItem } from "../../../menu"
import type { ExportConfig } from "./types"


interface ExportMenuGroupProps {
    config: ExportConfig
    disabled?: boolean
}



export const ExportMenuGroup = ({ config, disabled }: ExportMenuGroupProps) => {
    const { flags, options } = config

    return (    
        <MenuGroup title="Export PNG">
            {flags.map(flag => (
                <MenuCheckbox
                    key={flag.id}
                    title={flag.label}
                    checked={flag.checked}
                    onChange={() => flag.toggle(flag.checked)}
                    disabled={disabled}
                />
            ))}
            
            <MenuDivider/>

            {options.map(opt => (
                <MenuItem 
                    key={opt.id} 
                    title={opt.label} 
                    onClick={opt.onSelect} 
                    disabled={disabled}
                />
            ))}
        </MenuGroup>
    )
}
