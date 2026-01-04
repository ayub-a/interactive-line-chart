import type { SelectOption } from "../MultiSelect"


export const getMultiSelectLabel = (selected: SelectOption[], options: SelectOption[], placeholder = 'Select variations') => {
    if (!options.length) return 'No options'

    const count = selected.length
    const total = options.length

    if (count === 0) return placeholder
    if (count === total) return 'All variations selected'
    if (count === 1) return selected[0].name
    if (count <= 2) return selected.map(s => s.name).join(", ");

    return `${count} variations selected`;
}
