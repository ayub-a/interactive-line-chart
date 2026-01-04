import type { PeriodType } from "../../../model/types"
import { Select } from "../../../../select"
import { PERIOD } from "../../../model/period"


interface PeriodSelectorProps {
    selected: PeriodType
    setPeriod: (period: PeriodType) => void
}


export function PeriodSelector({ selected, setPeriod }: PeriodSelectorProps) {

    return (
        <Select
            selected={selected}
            options={Object.values(PERIOD)}
            onChange={setPeriod}
            display='selected'
        />
    )
}
