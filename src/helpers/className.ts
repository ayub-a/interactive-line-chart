
export function clsnm(cls: string, additional: string[] = [], mods: Record<string, boolean> = {}): string {
    return [
        cls, 
        ...additional.filter(Boolean), 
        ...Object.keys(mods).filter(key => mods[key])
    ]
    .join(' ')
    .trim()
}

// e.g.
// clsnm('button', ['disabled', 'rounded'], { hover: true }) -> 'button disabled rounded hover'
