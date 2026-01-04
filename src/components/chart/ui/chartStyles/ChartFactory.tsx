import React from "react"
import type { ComponentType, PropsWithChildren } from "react"
import {  Legend } from "recharts"

import type { ChartStyle, ChartUISettings, ChartVariation } from "../../model/types"


const PALETTE = ['#5E5D67', '#4142EF', '#FF8346', '#39d428ff']

function prepareVariations(variations: any[]) {
    return variations.map((v, i) => ({
        ...v,
        color: v.color ?? PALETTE[i % PALETTE.length],
    }))
}


interface ChartFactoryOwnProps extends PropsWithChildren {
    type: ChartStyle
    allVariations: ChartVariation[]
    selectedVariations: ChartVariation[]
    isAnimationActive?: boolean
    uiSettings: ChartUISettings
}


export type ChartFactoryProps<ChartProps extends object, ElementProps extends object> =
    ChartFactoryOwnProps & {
        ChartComponent: ComponentType<ChartProps>
        ElementComponent: ComponentType<ElementProps>
    }
    & 
    Omit<ChartProps, keyof ChartFactoryOwnProps>


export function ChartFactory<ChartProps extends object, ElementProps extends object>({
    ChartComponent,
    ElementComponent,
    children,
    type, // line style
    allVariations,
    selectedVariations,
    isAnimationActive = true,
    uiSettings,
    ...rest
}: ChartFactoryProps<ChartProps, ElementProps>) {
    const preparedAllVariations = React.useMemo(
        () => prepareVariations(allVariations),
        [allVariations]
    )

    const variationMap = React.useMemo(
        () => new Map(preparedAllVariations.map(v => [v.id, v])),
        [preparedAllVariations]
    )

    const variations = React.useMemo(
        () => selectedVariations
            .map(v => variationMap.get(v.id))
            .filter(Boolean),
        [selectedVariations, variationMap]
    )


    return (
        <ChartComponent {...(rest as ChartProps)}>
            {children}

            {uiSettings.legend && <Legend wrapperStyle={{ marginBottom: '-5px' }}/>}

            {variations.map(v => {
                const elementProps = {
                    type,
                    isAnimationActive,
                    strokeWidth: "2px",
                    stroke: v.color,
                    fill: v.color,
                    fillOpacity: "0.2",
                    dataKey: v.name,
                    dot: uiSettings.dots ? { fill: 'var(--bg)', stroke: v.color,  fillOpacity: "1", } : uiSettings.dots
                } as ElementProps;

                return <ElementComponent key={v.id} {...elementProps} />
            })}

        </ChartComponent>
    )
}
