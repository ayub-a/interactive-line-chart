import { MultiSelect } from "../../../../multiSelect"
import type { ChartVariation } from "../../../model/types"


interface VariationsSelectorProps {
    variations: ChartVariation[]
    selected: ChartVariation[]
    setVariations: (variation: ChartVariation) => void
}


export function VariationsSelector({ selected, variations, setVariations }: VariationsSelectorProps) {

    return (
        <MultiSelect
            selected={selected}
            options={variations}
            onChange={setVariations}
        />
    )
}
