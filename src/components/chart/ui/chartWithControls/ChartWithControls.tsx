import React from "react"

import type { ChartData } from "../../model/types"

import { Chart } from "../..";
import { ChartControls } from "../chartControls/ChartControls"

import cl from './ChartWithControls.module.css'


type ChartProps = {
    data: ChartData | null;
};


export const ChartWithControls: React.FC<ChartProps> = ({ data }) => {
    if (!data) return

    return (
        <div className={cl.root}>
            <ChartControls data={data}>
                {(props) => <Chart {...props} />}
            </ChartControls>
        </div>
    )
}
