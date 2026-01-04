import React from "react"


export function useWindowResize(cb: (size: {width: number, height: number}) => void) {
    React.useEffect(() => {
        const resize = (e: any, w?: number, h?: number) => {
            const width = e?.target?.innerWidth ?? w
            const height = e?.target?.innerHeight ?? h

            cb({ width, height })
        }

        resize(null, window.innerWidth, window.innerHeight)

        window.addEventListener('resize', resize)

        return () => window.removeEventListener('resize', resize)
    }, [])
}
