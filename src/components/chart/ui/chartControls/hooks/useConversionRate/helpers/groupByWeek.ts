import type { ChartHistory } from "../../../../../model/types"
import { normalizeWeek } from "./normalizeWeek"


export function groupByWeek(history: ChartHistory[]) {
    return history.reduce((acc: Record<string, ChartHistory[]>, el) => {
        const dateKey = normalizeWeek(el.date)

        acc[dateKey]
            ? acc[dateKey].push(el)
            : acc[dateKey] = [el]

        return acc
    }, {})

    // expect:
    // {
    //     '2025-01-W1': [{...},]
    //     '2025-01-w2': [{...},]
    //     ...
    // }
}
