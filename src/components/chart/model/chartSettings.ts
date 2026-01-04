import type { ChartUISettings, ChartVariation, PeriodType } from "./types"

export interface ChartSettings {
    conversionRate: Record<string, string | number>[]
    periodType: PeriodType
    allVariations: ChartVariation[]
    selectedVariations: ChartVariation[]
    uiSettings: ChartUISettings
    palette?: Record<string, string>
    isAnimationActive?: boolean
    height?: number | string
    width?: number | string
}
