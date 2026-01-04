import type { BuilderParams } from "..";
import { calculateConversionRateByDay } from "./calculateConversionRate";

export function buildDayDate({ history, selectedVariations }: BuilderParams) {
    return history.map(({ date, visits, conversions }) => ({
        day: date, date, ...calculateConversionRateByDay(conversions, visits, selectedVariations)
    }))
}
