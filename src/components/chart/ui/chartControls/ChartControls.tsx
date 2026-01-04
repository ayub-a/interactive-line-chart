import React from "react";

import MoreIcon from '../../../../assets/more.svg?react'

import { ResponsiveToolbar, ToolbarDivider } from "../../../responsiveToolbar";
import { ThemeToggle } from "../../../themeToggle";

import type { ChartSettings } from "../../model/chartSettings";
import type { ChartData, ChartUISettings } from "../../model/types";
import { CHART_STYLES } from "../../model/chartStyles";

import { ExportPngControl } from "../exportPngControl";

import { ChartSettingsPanel, ChartUISettingsPanel, PeriodSelector, VariationsSelector } from "./chartSettingsPanel";
import { useChartControlSettings, useConversionRate } from "./hooks";

import cl from './ChartControls.module.css'



interface ChartControlsProps {
    data: ChartData,
    children: (props: ChartSettings) => React.ReactNode
}

export const ChartControls: React.FC<ChartControlsProps> = React.memo(({ children, data }) => {
    const { variations, data: history } = data

    const [uiSettings, setUiSettings] = React.useState<ChartUISettings>({ dots: false, legend: false, lineStyle: CHART_STYLES.SMOOTH })

    const { current, setPeriod, setVariations } = useChartControlSettings([variations[2]])
    
    const conversionRate = useConversionRate({ history, periodType: current.periodType, selectedVariations: current.variations })
    
    const chartSettings: ChartSettings = {
        conversionRate,
        allVariations: variations,
        selectedVariations: current.variations,
        periodType: current.periodType,
        uiSettings,
    }

    return (
        <div className={cl.root}>
            <ChartSettingsPanel className={cl.controls}>
                <ChartSettingsPanel.Left>
                    <VariationsSelector selected={current.variations} variations={variations} setVariations={setVariations}/>
                    <PeriodSelector selected={current.periodType} setPeriod={setPeriod}/>
                </ChartSettingsPanel.Left>

                <ChartSettingsPanel.Right>
                    <ChartUISettingsPanel value={uiSettings} onChange={(next) => setUiSettings(next)}/>

                    <ResponsiveToolbar menuTitle={<MoreIcon />} collapseAt={900} reverseMenu>
                        <ExportPngControl chartSettings={chartSettings}/>
                        <ToolbarDivider/>
                        <ThemeToggle/>
                    </ResponsiveToolbar>
                </ChartSettingsPanel.Right>
            </ChartSettingsPanel>

            <div>{children(chartSettings)}</div>
        </div>
    )
})
