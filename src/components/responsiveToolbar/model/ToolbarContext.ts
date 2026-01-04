import React from "react"


import type { ToolbarMode } from "./types"


export const ToolbarContext = React.createContext<ToolbarMode>('inline')
