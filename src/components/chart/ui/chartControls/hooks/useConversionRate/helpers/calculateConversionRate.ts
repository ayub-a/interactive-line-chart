import type { ChartHistory, ChartVariation } from "../../../../../model/types"


type Conversions = ChartHistory['conversions']
type Visits = ChartHistory['visits']


export const calculateConversionRateByDay = (conversions: Conversions, visits: Visits, selected: ChartVariation[]) => {
    return selected.reduce((acc: Record<string, number>, v) => {
        const id = v.id
        const c = conversions?.[id] ?? 0
        const vt = visits?.[id] ?? 0

        const rate = vt > 0 ? (c / vt) * 100 : 0

        acc[v.name] = Number(rate.toFixed(2))
        return acc
    }, {})
}
