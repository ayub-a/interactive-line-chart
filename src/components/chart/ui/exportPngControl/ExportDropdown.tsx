import { ActionCheckbox, ActionDivider, ActionDropdown, ActionGroup, ActionItem } from "../../../actionDropdown"
import type { ExportConfig } from "./types"


interface ExportDropdownProps {
    config: ExportConfig 
    resetToUI: () => void
    disabled?: boolean 
}

export const ExportDropdown = ({ config, resetToUI, disabled }: ExportDropdownProps) => {
    const { flags, options } = config

    return (
        <ActionDropdown label="Export PNG" onOpen={resetToUI} disabled={disabled}>
            <ActionGroup title="Options">
                {flags.map(flag =>(
                    <ActionCheckbox
                        key={flag.id}
                        title={flag.label}
                        checked={flag.checked}
                        onChange={flag.toggle}
                    />
                ))}
            </ActionGroup>

            <ActionDivider />

            <ActionGroup title="Actions">
                {options.map(opt => <ActionItem key={opt.id} title={opt.label} onClick={opt.onSelect}/>)}
            </ActionGroup>
        </ActionDropdown>
    )
}
