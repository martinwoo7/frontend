import { createContext, useContext } from "react";

export const NavContext = createContext({ active: 0, setActive: () => {}, setAnimating: () => {}, finished: false});
export const useNav = () => {
	return useContext(NavContext);
};
