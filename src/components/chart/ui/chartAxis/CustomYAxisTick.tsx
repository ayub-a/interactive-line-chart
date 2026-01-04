
export const CustomYAxisTick = (props: any) => {
    const { x, y, payload, index, visibleTicksCount: dataLength, palette } = props;
    
    let dx = 0;

    if (index === dataLength - 1) dx = 8;
    if (index === 0) dx = -2;

    return (
        <g transform={`translate(${x},${y})`}>
            <text 
                x={0} y={0} 
                dy={dx}
                dx={-5}
                textAnchor='end'
                fill={palette?.axisText ?? 'var(--text-color)'}
                fontWeight={500}
            >
                {payload.value + '%'}
            </text>
        </g>
    );
}
