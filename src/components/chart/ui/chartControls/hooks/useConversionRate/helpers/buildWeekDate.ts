import type { BuilderParams } from ".."

import { addHumanReadableLabels } from "./addHumanReadableLabels"
import { aggregate } from "./aggregate"
import { groupByWeek } from "./groupByWeek"
import { normilizeDate } from "./normalizeDate"


export function buildWeekDate({ history, selectedVariations }: BuilderParams) {
    const normilizedDate = normilizeDate(history)
    const groups = groupByWeek(normilizedDate)
    const weekly = aggregate(groups, selectedVariations)
    const weeklyWithLabels = addHumanReadableLabels(weekly)
    return weeklyWithLabels
}
