import React from "react"


export function useClickOutside(ref: React.RefObject<any>, onOutsideClick: () => void) {
    const callbackRef = React.useRef(onOutsideClick)
    callbackRef.current = onOutsideClick

    React.useEffect(() => {
        const handler = (e: MouseEvent) => {
            const el = ref.current
            if (!el) return
            if (!el.contains(e.target)) callbackRef.current()
        }
        window.addEventListener('mousedown', handler)
        return () => window.removeEventListener('mousedown', handler)
    }, [])
}
