import { createContext, useContext } from "react";

export const DockContext = createContext({ width: 0, active: 0, hovered: false, setIsZooming: () => {}, setActive: () => {}})
export const useDock = () => {
    return useContext(DockContext)
}