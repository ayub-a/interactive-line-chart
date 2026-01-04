import React from "react"

import type { ChartVariation } from "../../../model/types"


export function useChartVariations(initial: ChartVariation[]) {
    const [currentVariations, setCurrentVariations] = React.useState(initial)

    const changeVariations = (v: ChartVariation) => {
        setCurrentVariations(prev => {
            const exists = prev.some(x => x.id === v.id)

            if (exists) {
                if (prev.length === 1) return prev
                return prev.filter(x => x.id !== v.id)
            }

            return [...prev, v]
        })
    }

    return { currentVariations, changeVariations }
}
