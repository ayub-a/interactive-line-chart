import type { ChartStyle } from "./types";


export const CHART_STYLES = {
    LINE: 'line',
    SMOOTH: 'smooth',
    AREA: 'area',
} as const satisfies Record<string, ChartStyle>
