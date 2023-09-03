import { useState, memo } from "react";
import { Link, animateScroll } from "react-scroll";
import { useNav } from "../NavList/NavContext";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";
import { ListItemButton, ListItemText, ListItem, styled } from "@mui/material";

// const TransitionListItemButton = styled(ListItemButton)`${({ theme }) => `
//     transition: ${theme.transitions.create(['color'], {
//         duration: theme.transitions.duration.standard
//     })};
//     &:hover {
//         color: ${theme.primary}
//     }
// `}`

export const NavItem = ({ index, text }) => {
	const nav = useNav();
	const current = nav.active === index;
	const [ref, { height: viewHeight }] = useMeasure();
	const { height, y } = useSpring({
		from: { height: viewHeight, y: 0 },
		to: {
			height: current ? viewHeight * 2 : viewHeight,
			y: current ? 0 : 20,
		},
		config: {
			mass: 1,
			tension: 170,
			friction: 26,
			clamp: true,
		},
	});
	const handleClick = (event, index) => {
		// animateScroll.scrollTo(index);
		nav.setAnimating(true);
		nav.setActive(index);
		setTimeout(() => {
			nav.setAnimating(false);
		}, 2000);
	};
	return (
		<animated.div style={{ height: height, y }}>
			<Link
				activeStyle={{
					textDecoration: "none",
					color: "primary.main",
				}}
				style={{ color: "white" }}
				to={text}
				spy={true}
				smooth={true}
				duration={400}
				onSetActive={() => {
					// nav.setActive(index);
					if (nav.finished) {
						nav.setActive(index);
					}
				}}
			>
				<ListItem key={index} ref={ref} style={{}}>
					<ListItemButton
						sx={{
							"&.Mui-selected": {
								bgcolor: "transparent !important",
								color: "primary.main",
							},
							transition: "color 0.3s",
							"&:hover": {
								transition: "color 0.3s",
								bgcolor: "transparent",
								color: "primary.main",
							},
						}}
						selected={current}
						onClick={(event) => handleClick(event, index)}
						disableRipple={true}
					>
						<ListItemText
							primary={text}
							primaryTypographyProps={{ variant: "body1" }}
						/>
					</ListItemButton>
				</ListItem>
			</Link>
		</animated.div>
	);
};
