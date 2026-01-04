import type { PeriodType } from "./types";

export const PERIOD = {
    DAY: 'day',
    WEEK: 'week',
} as const satisfies Record<string, PeriodType>
