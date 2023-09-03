import { List } from "@mui/material";
import { NavContext } from "./NavContext";
import { useState, useRef, useCallback } from "react";

export const NavList = ({ children, active, setActive }) => {
    // const [animating, setAnimating] = useState(false)
    const [finished, setFinished] = useState(true)
    const animating = useRef(false)
    const setAnimating = useCallback((value) => {
        animating.current = value
        setFinished(!value)
    }, [])
	return (
		<NavContext.Provider value={{ active, setActive, setAnimating, finished}}>
			<List
				component="nav"
				sx={{
					// my: "auto",
					// bgcolor: "red",
					display: "flex",
					flexDirection: "column",
                    overflow: "hidden"
				}}
			>
				{children}
			</List>
		</NavContext.Provider>
	);
};
