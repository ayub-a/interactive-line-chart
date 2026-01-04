import { CartesianGrid, ReferenceArea, Tooltip, XAxis, YAxis } from "recharts"

import type { ChartSettings } from "../../model/chartSettings"
import { CHART_STYLES } from "../../model/chartStyles"

import { CustomYAxisTick } from "../chartAxis/CustomYAxisTick"
import { CustomXAxisTick } from "../chartAxis/CustomXAxisTick"
import { ChartTooltip, type ChartTooltipProps } from "../chartTooltip/ChartTooltip"
import { chartStrategies } from "../chartStyles/chartStrategies"

import cl from './Chart.module.css'


type ChartProps = ChartSettings 

export const Chart = (props: ChartProps) => {
    const { uiSettings, conversionRate, periodType, palette, width = '100%', height = '380px', ...otherProps } = props
    
    if (!conversionRate.length) return <div className={cl.no_data}>No data</div>

    const StyleComponent = chartStrategies[uiSettings.lineStyle] ?? CHART_STYLES.SMOOTH

    return (
        <StyleComponent
            data={conversionRate}
            uiSettings={uiSettings}
            className={cl.chart}
            responsive
            style={{
                width,
                height,
                aspectRatio: 1.618,
            }}
            {...otherProps}
        >
            <ReferenceArea
                style={{ outline: 'none' }}
                y1={0}
                strokeWidth={1}
                stroke='#989898ff' 
                fill="none" 
                zIndex={1000}
            />

            <CartesianGrid 
                horizontal={false} 
                strokeDasharray='10 10'
            />

            <Tooltip
                cursor={{ strokeWidth: 1.5 }} 
                content={(props) => <ChartTooltip {...(props as ChartTooltipProps)} periodType={periodType}/>}
            />

            <YAxis
                tick={(props) => <CustomYAxisTick {...props} periodType={periodType} palette={palette} />}
                tickLine={false}
                strokeWidth={0}
            />
            
            <XAxis
                tick={(props) => <CustomXAxisTick {...props} periodType={periodType} palette={palette}/>}
                tickFormatter={(value) => periodType === 'day' ? new Date(value).getDate() : value}
                dataKey={periodType === 'week' ? 'dateFromTo' : 'day'}
                tickLine={false} 
                strokeWidth={0}
                tickMargin={6}
            />
        </StyleComponent>
    )
}


