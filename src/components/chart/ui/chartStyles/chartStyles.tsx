import { Area, AreaChart, Line, LineChart } from "recharts"

import { CHART_STYLES } from "../../model/chartStyles"
import type { ChartStyle } from "../../model/types"
import { ChartFactory, type ChartFactoryProps } from "./ChartFactory"


type OmitChart = "ChartComponent" | "responsive" | "ElementComponent" | "type"

type LineChartProps = React.ComponentProps<typeof LineChart>
type LineProps = React.ComponentProps<typeof Line>

export const LineChartStyle = (props: Omit<ChartFactoryProps<LineChartProps, LineProps>, OmitChart>) => (
    <ChartFactory
        ChartComponent={LineChart}
        ElementComponent={Line}
        type={CHART_STYLES.LINE}
        {...props}
    />
)

export const LineSmoothChartStyle = (props: Omit<ChartFactoryProps<LineChartProps, LineProps>, OmitChart>) => (
    <ChartFactory
        ChartComponent={LineChart}
        ElementComponent={Line}
        type={CHART_STYLES.SMOOTH && 'monotone' as ChartStyle}
        {...props}
    />
);


type AreaChartProps = React.ComponentProps<typeof AreaChart>
type AreaProps = React.ComponentProps<typeof Area>

export const AreaChartStyle = (props: Omit<ChartFactoryProps<AreaChartProps, AreaProps>, "ChartComponent" | "ElementComponent" | "type">) => ( // | "variations" | "children"
    <ChartFactory
        ChartComponent={AreaChart}
        ElementComponent={Area}
        type={CHART_STYLES.AREA && 'monotone' as ChartStyle}
        {...props}
    />
);
