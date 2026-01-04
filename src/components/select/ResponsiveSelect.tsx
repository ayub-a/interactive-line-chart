import { MenuGroup, MenuRadio } from "../menu"
import { ToolbarItem } from "../responsiveToolbar/ui/ToolbarItem"
import { Select } from "./Select"


interface ResponsiveSelectProps<T = string> {
    title?: string
    selected: T
    options: T[]
    onChange: (value: T) => void
}


export const ResponsiveSelect = ({ title, options, selected, onChange }: ResponsiveSelectProps) => {

    return (
        <ToolbarItem
            inline={
                <Select
                    title={title}
                    display='title & selected'
                    options={options}
                    selected={selected}
                    onChange={(v) => onChange(v)}
                />
            }

            menu={
                <MenuGroup title="Line style">
                    {options.map(opt => 
                        <MenuRadio
                            key={opt}
                            title={opt} 
                            selected={selected} 
                            onChange={() => onChange(opt)}/>
                        )}
                </MenuGroup>
            }
        />
    )
}
