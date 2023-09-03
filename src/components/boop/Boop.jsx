import React from "react";
import { animated } from "@react-spring/web";

import { useBoop } from "./useBoop";

export const Boop = ({ children, ...boopConfig }) => {
	const [style, trigger] = useBoop(boopConfig);

	return (
		<animated.span onMouseEnter={trigger} style={style}>
			{children}
		</animated.span>
	);
};
