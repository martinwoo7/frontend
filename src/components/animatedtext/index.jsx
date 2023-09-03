import { useState, useEffect } from "react";
import { useTrail, animated } from "@react-spring/web";
import { Box, Typography } from "@mui/material";

export const AnimatedText = ({ children, sx }) => {
	const words = children.split(" ");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const trail = useTrail(words.length, {
		opacity: mounted ? 1 : 0,
		transform: mounted ? "translateX(0%)" : "translateX(-50%)",
		config: { mass: 1, tension: 300, friction: 20 },
		from: { opacity: 0, transform: "translateX(-50%)" },
		delay: (index) => Math.random() * 500,
	});

	return (
		<Box sx={sx}>
			{trail.map(({ opacity, transform }, index) => (
				<animated.span
					key={index}
					style={{
						opacity,
						transform,
						display: "inline-block",
						marginRight: "5px",
						userSelect: "none",
					}}
				>
					<Typography fontSize={20}>{words[index]}</Typography>
				</animated.span>
			))}
		</Box>
	);
};
export default AnimatedText
