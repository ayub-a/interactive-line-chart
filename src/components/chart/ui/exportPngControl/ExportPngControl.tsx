import React from "react"
import { createRoot } from "react-dom/client"
import dayjs from "dayjs"

import { ToolbarItem } from "../../../responsiveToolbar/ui/ToolbarItem"
import { useMenuOpen } from "../../../responsiveToolbar/ui/dropdownMenu/useMenuOpen"

import type { ChartSettings } from "../../model/chartSettings"
import type { ExportOption } from "../../model/types"
import { EXPORT_OPTIONS } from "../../model/exportPng"

import { Chart } from "../chart/Chart"

import { useExportPng } from "./hooks/useExportPng"
import { useExportConfig } from "./hooks/useExportConfig"
import { ExportDropdown } from "./ExportDropdown"
import { ExportMenuGroup } from "./ExportMenuGroup"


interface ExportPngWithOptionsProps {
    chartSettings: ChartSettings
    className?: string
    width?: string
    height?: string
}

export const ExportPngControl = (props: ExportPngWithOptionsProps) => {
    const { chartSettings, width = '1000px', height = '380px' } = props

    const [uiSettings, setUISettings] = React.useState({ dots: false, legend: false })


    const resetToUI = () => {
        setUISettings({
            dots: chartSettings.uiSettings.dots, 
            legend: chartSettings.uiSettings.legend
        })
    }

    useMenuOpen(() => resetToUI()) // when mode === menu


    const { exportPng, options } = useExportPng()

    const exportChart = async (variant: ExportOption) => {
        const palette = EXPORT_OPTIONS[variant]
        
        const container = document.createElement('div')
        container.style.position = "fixed";
        container.style.top = "-200px";
        container.style.transform = "translate(-100vw, -100vh)"; 
        container.style.pointerEvents = 'none'
        document.body.appendChild(container)

        const root = createRoot(container)

        root.render(
            <Chart
                {...chartSettings}
                isAnimationActive={false} 
                width={width} 
                height={height} 
                palette={palette} 
                uiSettings={{ ...uiSettings, lineStyle: chartSettings.uiSettings.lineStyle, }} 
            />
        )

        await new Promise(r => requestAnimationFrame(r)) // !!! important

        const url = await exportPng(container, variant)

        root.unmount()
        container.remove()

        const a = document.createElement('a')
        a.href = url
        a.download =`chart-${dayjs().format('YYYY-MM-DD')}-${chartSettings.periodType}.png`;
        a.click()
    }

    const exportConfig = useExportConfig({ 
        options, 
        exportChart: (opt) => exportChart(opt as ExportOption),
        flags: uiSettings,
        changeFlag: (flag) => setUISettings(prev => ({ ...prev, ...flag }))
    })
    
    return (
        <ToolbarItem
            inline={<ExportDropdown config={exportConfig} resetToUI={resetToUI} disabled={!chartSettings.conversionRate.length}/>}
            menu={<ExportMenuGroup config={exportConfig} disabled={!chartSettings.conversionRate.length}/>}
        />
    )
}
