import React, { useEffect, useRef, useState } from "react";
import {
	animated,
	useIsomorphicLayoutEffect,
	useSpringValue,
} from "@react-spring/web";

import { useWindowResize } from "../hooks/useWindowResize";
import { useMousePosition } from "../hooks/useMousePosition";

import { useDock } from "../Dock/DockContext";
import "./styles.css";

const INITIAL_WIDTH = 48;

export const DockCard = ({ children, value, isActive }) => {
	const cardRef = useRef(null);
	const [elCenterX, setElCenterX] = useState(0);

	const size = useSpringValue(INITIAL_WIDTH, {
		config: {
			mass: 0.1,
			tension: 320,
		},
	});

	const opacity = useSpringValue(0);
	const y = useSpringValue(0, {
		config: {
			friction: 29,
			tension: 238,
		},
	});

	const dock = useDock();

	useMousePosition(
		{
			onChange: ({ value }) => {
				const mouseX = value.x;
				if (dock.width > 0) {
					const transformedValue =
						INITIAL_WIDTH +
						36 *
							Math.cos(
								(((mouseX - elCenterX) / dock.width) *
									Math.PI) /
									2
							) **
								12;
					if (dock.hovered) {
						size.start(transformedValue);
					}
				}
			},
		},
		[elCenterX, dock]
	);

	useIsomorphicLayoutEffect(() => {
		if (!dock.hovered) {
			size.start(INITIAL_WIDTH);
		}
	}, [dock.hovered]);

	useWindowResize(() => {
		const { x } = cardRef.current.getBoundingClientRect();
		setElCenterX(x + INITIAL_WIDTH / 2);
	});

	// const timesLooped = useRef(0);
	// const timeoutRef = useRef();
	// const isAnimating = useRef(false);

	// this will have to change to something usable

	// const handleClick = () => {
	// 	if (!isAnimating.current) {
	// 		isAnimating.current = true;
	// 		opacity.start(0.5);

	// 		timesLooped.current = 0;

	// 		y.start(-INITIAL_WIDTH / 2, {
	// 			loop: () => {
	// 				if (3 === timesLooped.current++) {
	// 					timeoutRef.current = setTimeout(() => {
	// 						opacity.start(0);
	// 						y.set(0);
	// 						isAnimating.current = false;
	// 						timeoutRef.current = undefined;
	// 					}, 1800);
	// 					y.stop();
	// 				}
	// 				return { reverse: true };
	// 			},
	// 		});
	// 	} else {
	// 		// allows premature exit of animation
	// 		clearTimeout(timeoutRef.current);
	// 		opacity.start(0);
	// 		y.start(0);
	// 		isAnimating.current = false;
	// 	}
	// };

	// pass in current active
	const handleClick = () => {
		opacity.start(0.5);
		y.start(-INITIAL_WIDTH / 2);
		// dock.setActive(value);
	};

	// useEffect(() => {
	// 	console.log("Inside dock: ", dock);
	// 	if (dock.active !== value) {
	// 		opacity.start(0);
	// 		y.start(0);
	// 	}
	// }, [dock.active]);
	useEffect(() => {
		if (isActive !== "active") {
			opacity.start(0);
			y.start(0);
		}
	}, [isActive, opacity, y]);

	return (
		<div className="dock-card-container">
			<animated.button
				ref={cardRef}
				className={"dock-card"}
				onClick={handleClick}
				style={{
					width: size,
					height: size,
					y,
				}}
			>
				{children}
			</animated.button>
			<animated.div className={"dock-dot"} style={{ opacity }} />
		</div>
	);
};
