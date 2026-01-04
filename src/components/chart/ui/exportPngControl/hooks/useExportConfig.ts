import type { ChartUISettings } from "../../../model/types"
import type { ExportConfig } from "../types"


interface ExportConfigParams {
    options: string[]
    exportChart: (opt: string) => void
    flags: Omit<ChartUISettings, 'lineStyle'>
    changeFlag: (value: Record<string, boolean>) => void
}

export function useExportConfig({ options, exportChart, flags, changeFlag }: ExportConfigParams): ExportConfig {

    return {
        flags: Object.entries(flags).map(([key, value]) => ({ id: key, label: key, checked: value, toggle: () => changeFlag({ [key]: !value }) })),
        options: options.map(opt => ({ id: opt, label: opt, onSelect: () => exportChart(opt) }))
    }
}
