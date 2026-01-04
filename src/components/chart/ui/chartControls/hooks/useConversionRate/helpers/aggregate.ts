import type { ChartHistory, ChartVariation } from "../../../../../model/types"



export function aggregate(groups: Record<string, ChartHistory[]>, selected: ChartVariation[]) {
    const result: Record<string, string|number>[] = []

    for (let weekKey of Object.keys(groups)) {
        const days = groups[weekKey]

        const totals = days.reduce((acc: Record<string, number>, { conversions, visits }) => {
            for (const v of selected) {
                const id = v.id
                const c = conversions?.[id] ?? 0
                const vt = visits?.[id] ?? 0

                const rate = vt > 0 ? (c / vt) * 100 : 0

                acc[v.name] = (acc[v.name] ?? 0) + rate
            }

            return acc
        }, {})

        for (const id of Object.keys(totals)) {
            totals[id] = Number(totals[id].toFixed(2))
        }

        result.push({
            week: weekKey,
            ...totals,
        })
    }

    return result
}
