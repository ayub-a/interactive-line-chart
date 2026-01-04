import React from "react"

import type { ChartHistory, ChartVariation, PeriodType } from "../../../../model/types"
import { buildDayDate } from "./helpers/buildByDate"
import { buildWeekDate } from "./helpers/buildWeekDate"


type FnReturn = Record<string, string | number>[]
type BuilderFn = (params: BuilderParams) => FnReturn

export type BuilderParams = {
    history: ChartHistory[]
    selectedVariations: ChartVariation[]
}

interface ConversionRateParams extends BuilderParams {
    periodType: PeriodType
}

export function useConversionRate({ history, selectedVariations, periodType }: ConversionRateParams): FnReturn 
{
    const builders: Record<PeriodType, BuilderFn> = {
        'day': buildDayDate,
        'week': buildWeekDate
    }

    const builder = builders[periodType] || builders.day
    return React.useMemo(() => builder({ history, selectedVariations }), [history, selectedVariations, periodType])
}
