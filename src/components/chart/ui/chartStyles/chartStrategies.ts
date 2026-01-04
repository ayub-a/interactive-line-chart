import type { ChartStyle } from "../../model/types";
import { CHART_STYLES } from "../../model/chartStyles";
import { AreaChartStyle, LineChartStyle, LineSmoothChartStyle } from "./chartStyles";


export const chartStrategies: Record<ChartStyle , typeof LineChartStyle | typeof LineSmoothChartStyle | typeof AreaChartStyle>  = {
    [CHART_STYLES.LINE]: LineChartStyle,
    [CHART_STYLES.SMOOTH]: LineSmoothChartStyle,
    [CHART_STYLES.AREA]: AreaChartStyle,
} as const
