export type ExportOption = {
    id: string
    label: string
    onSelect: () => void
}

export type ExportFlag = {
    id: string
    label: string
    checked: boolean
    toggle: (v: boolean) => void
}

export type ExportConfig = {
    flags: ExportFlag[]
    options: ExportOption[]
}
