import { ResponsiveCheckbox } from "../../../../checkbox"
import { ResponsiveToolbar, ToolbarDivider } from "../../../../responsiveToolbar"
import { ResponsiveSelect } from "../../../../select"
import { CHART_STYLES } from "../../../model/chartStyles"
import type { ChartStyle, ChartUISettings } from "../../../model/types"


interface ChartUISettingsPanelProps {
    value: ChartUISettings
    onChange: (value: ChartUISettings) => void
}

export function ChartUISettingsPanel({ value, onChange }: ChartUISettingsPanelProps) {

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <ResponsiveToolbar menuTitle="Appearance" collapseAt={800}>
                <ResponsiveCheckbox title="Dots" checked={value.dots} onChange={(next) => onChange({ ...value, dots: next })}/>
                <ResponsiveCheckbox title="Legend" checked={value.legend} onChange={(next) => onChange({ ...value, legend: next })}/>

                <ToolbarDivider/>

                <ResponsiveSelect
                    title="Line style"
                    options={Object.values(CHART_STYLES)}
                    selected={value.lineStyle}
                    onChange={(line) => onChange({ ...value, lineStyle: line as ChartStyle })}
                />
            </ResponsiveToolbar>
        </div>
    )
}