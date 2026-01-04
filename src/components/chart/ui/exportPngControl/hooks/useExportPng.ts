import html2canvas from "html2canvas";

import { EXPORT_OPTIONS } from "../../../model/exportPng";
import type { ExportOption } from "../../../model/types";


export function useExportPng() {
    const exportPng = async (container: HTMLElement, option: ExportOption) => {
        const canvas = await html2canvas(container, {
            backgroundColor: EXPORT_OPTIONS[option].bg,
            useCORS: true, // important for external images
            logging: true, // show logs, use for dev mode
        });

        return canvas.toDataURL('image/png', 1.0);
    };

    return { exportPng, options: Object.keys(EXPORT_OPTIONS) as ExportOption[] }
}
