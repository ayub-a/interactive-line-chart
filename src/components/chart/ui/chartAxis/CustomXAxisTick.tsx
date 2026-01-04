
export const CustomXAxisTick = (props: any) => {
    const { x, y, payload, index, visibleTicksCount: dataLength, periodType, palette } = props;
    
    let dx = -1;
    // Если это первый элемент, смещаем его вправо на 10px

    if (periodType === 'week') {
        if (index === 0) {
            dx = 30;
        } 
        // Если это последний элемент, смещаем его влево на 10px
        else if (index === dataLength - 1) {
            dx = -10;
        }
    }

    return (
        <g transform={`translate(${x},${y})`} >
            <text 
            style={{ outline: 'none' }}
                x={0} y={0} 
                dy={10}
                dx={dx}
                textAnchor="middle"
                fill={palette?.axisText ?? 'var(--text-color)'}
                fontWeight={500}
            >
                {periodType === 'day' ? new Date(payload.value).getDate() : payload.value}
            </text>
        </g>
    );
}
