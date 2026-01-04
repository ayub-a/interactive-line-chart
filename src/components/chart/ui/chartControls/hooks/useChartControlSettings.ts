import React from "react"

import type { ChartVariation, PeriodType } from "../../../model/types"
import { PERIOD } from "../../../model/period"
import { useChartVariations } from "./useChartVariations"

export function useChartControlSettings(initialVariations: ChartVariation[]) {
    const [periodType, setPeriodType] = React.useState<PeriodType>(PERIOD.DAY)
    const { currentVariations, changeVariations } = useChartVariations(initialVariations)

    return {
        current: {
            periodType,
            variations: currentVariations,
        },
        setPeriod: setPeriodType,
        setVariations: changeVariations,
    }
}
