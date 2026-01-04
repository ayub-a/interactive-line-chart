import type React from "react"
import type { TooltipContentProps } from "recharts"
import dayjs from "dayjs"

import CalendarIcon from '../../../../assets/calendar.svg?react'
import ChampionIcon from '../../../../assets/champion.svg?react'

import type { PeriodType } from "../../model/types"
import cl from './ChartTooltip.module.css'


type ValueType = number
type NameType = string

export type ChartTooltipProps = TooltipContentProps<ValueType, NameType> & { periodType: PeriodType }


export const ChartTooltip: React.FC<ChartTooltipProps> = ({ active, payload, label, periodType }) => {
    if (!active || !payload?.length) return null

    const sortedByDesc = [...payload].sort((a, b) => b.value - a.value)

    const formatLabel = (label: string | number | undefined, periodType: PeriodType) => {
        if (periodType === 'day') return dayjs(label).format('DD/MM/YYYY')
        if (periodType === 'week') return label
        return label
    }

    return (
        <div className={cl.root}>
            
            <div className={cl.header}>
                <CalendarIcon className={cl.icon}/>
                <span>{formatLabel(label, periodType)}</span>
            </div>

            <div className={cl.list}>
                {sortedByDesc.map((el, i) => (
                    !Number.isNaN(el.value) && (
                        <div key={el.dataKey} className={cl.list_item}>

                            <span className={cl.dot} style={{ background: el.stroke }}/>

                            <div className={cl.item_info}>
                                <span className={cl.item_key}>
                                    {el.name}:           
                                    {
                                        i === 0 && payload.length > 1
                                        ? <ChampionIcon />
                                        : null
                                    }
                                </span>
                                
                                <span className={cl.item_value}>{el.value}%</span>
                            </div>

                        </div>
                    )
                ))}
            </div>
        </div>
    )
}
