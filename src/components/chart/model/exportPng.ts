import type { ExportOption } from "./types";


export const EXPORT_OPTIONS = {
    'Bg: Light': {
        axisText: '#1b1b23',
        bg: '#fff',
    },
    'Bg: Dark': {
        axisText: '#fff',
        bg: '#000027',
    },
    'Bg: Transparent': {
        axisText: '#989898ff',
        bg: 'transparent',
    },
} as const satisfies Record<ExportOption, { axisText: string, bg: string }>
