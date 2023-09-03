import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import { withRouter } from "../utils/utils";
import { useDispatch, connect } from "react-redux";
import { asyncToggleTheme } from "../themeSlice";
import { useTheme } from "@mui/material/styles";

// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// animation
import { animated, useTrail, useTransition } from "@react-spring/web";

import { Events, scrollSpy } from "react-scroll";
import { NavList } from "./navigation/NavList";
import { NavItem } from "./navigation/NavItem";
import AnimatedText from "./animatedtext";

// import SimpleBar from "simplebar-react";

import {
	Typography,
	Box,
	IconButton,
	Container,
	Drawer,
	Divider,
	Toolbar,
	TextField,
	Input,
	styled,
	Button,
} from "@mui/material";
import { useBoop } from "./boop/useBoop";
import { useNav } from "./navigation/NavList/NavContext";

const RoundTextField = styled(TextField)({
	"& .MuiInputBase-root": {
		borderRadius: 32,
		paddingLeft: 8,
		paddingRight: 8,
	},
});

const Headers = ["Home", "About", "Pricing", "More", "Other"];
const Colors = ["Blue", "Red", "Green", "Purple", "Pink"];
// TODO: Fix animations for button
const Home = (props) => {
	const dispatch = useDispatch();
	const theme = useTheme();
	const nav = useNav();

	const drawerWidth = 200;
	const containerRef = React.useRef();
	const [active, setActive] = useState(0);

	const [style, trigger] = useBoop({
		rotation: 90,
		springConfig: { tension: 300, friction: 10 },
	});

	const ref = useRef([]);
	const title = ["F", "O", "O", "D", "."];
	const [suffix, set] = useState([]);
	const trail = useTrail(title.length, {
		config: { mass: 18, tension: 2000, friction: 200 },
		opacity: 1,
		x: 0,
		height: 100,
		from: { opacity: 0, x: 30, height: 0 },
	});

	const transition = useTransition(suffix, {
		config: {},
		from: {
			opacity: 0,
			height: 0,
			innerHeight: 0,
		},
		enter: [{ opacity: 1, height: 100, innerHeight: 100 }],
		leave: [{ innerHeight: 0, opacity: 0, height: 0 }],
	});

	const reset = useCallback(() => {
		ref.current.forEach(clearTimeout);
		ref.current = [];
		set([]);
		ref.current.push(setTimeout(() => set(["IE"]), 1000));
		ref.current.push(setTimeout(() => set([":)"]), 2000));
		ref.current.push(setTimeout(() => set(["IO"]), 3000));
	}, []);

	useEffect(() => {
		reset();
		return () => ref.current.forEach(clearTimeout);
	}, []);

	useEffect(() => {
		Events.scrollEvent.register("begin", function () {
			console.log("begin", arguments);
		});
		Events.scrollEvent.register("end", function () {
			console.log("end", arguments);
		});

		scrollSpy.update();
		return () => {
			Events.scrollEvent.remove("begin");
			Events.scrollEvent.remove("end");
		};
	});

	return (
		<>
			<Box sx={{ display: "flex" }}>
				{/* main */}
				<Drawer
					sx={{
						width: drawerWidth,
						flexShrink: 0,
						"& .MuiDrawer-paper": {
							width: drawerWidth,
							borderRight: "none",
							justifyContent: "center",
							boxSizing: "border-box",
						},
					}}
					variant="permanent"
					anchor="left"
				>
					{/* <Toolbar>
						<Typography>
							{props.theme ? "Dark" : "Light"} Mode
						</Typography>
						<IconButton
							sx={{ ml: 1 }}
							onClick={() => dispatch(asyncToggleTheme())}
							color="inherit"
						>
							{theme.palette.mode === "dark" ? (
								<Brightness7Icon />
							) : (
								<Brightness4Icon />
							)}
						</IconButton>
					</Toolbar>
					<Divider /> */}
					<NavList active={active} setActive={setActive}>
						{Headers.map((text, index) => (
							<NavItem index={index} text={text} key={index} />
						))}
					</NavList>
				</Drawer>

				{/* <SimpleBar> */}
				<Box
					component="main"
					sx={{
						flexGrow: 1,
					}}
				>
					<Box
						sx={{
							bgcolor: "background.default",
							display: "flex",
							flexDirection: "column",
							flex: 1,
							minHeight: "100vh",
							justifyContent: "center",
							alignItems: "center",
						}}
						id="Home"
					>
						<Box
							sx={{
								// bgcolor: "blue",
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Box
								sx={{
									display: "flex",
									width: "fit-content",
									// bgcolor: "red",
								}}
							>
								<Box
									sx={{
										display: "flex",
										justifyContent: "center",
										m: 0,
										px: 0,
										width: "fit-content",
									}}
								>
									{/* title trail */}
									{trail.map(({ height, ...style }, i) => (
										<animated.div
											key={i}
											style={style}
											className={"trailsText"}
										>
											<animated.div
												style={{ height }}
												sx={{
													color: "primary",
												}}
											>
												{title[i]}
											</animated.div>
										</animated.div>
									))}
								</Box>
								<Box
									sx={{
										// bgcolor: "green",
										display: "flex",
										flexDirection: "column",
										margin: 0,
										width: "100px",
									}}
								>
									{transition(
										({ innerHeight, ...rest }, item) => (
											<animated.div
												className={"transitionsItem"}
												style={rest}
											>
												<animated.div
													style={{
														// overflow: "hidden",
														height: innerHeight,
														width: "100%",
													}}
												>
													{item}
												</animated.div>
											</animated.div>
										)
									)}
								</Box>
							</Box>

							<Box
								sx={{
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									width: "80%",
									// maxWidth
									// bgcolor: "red",
								}}
							>
								<AnimatedText
									sx={{
										color: "on_surface.medium",
										justifyContent: "center",
										display: "flex",
										mt: 2,
										flexWrap: "wrap",
									}}
								>
									Hello! What would you like to eat today?
									Maybe I can suggest something :)
								</AnimatedText>

								<RoundTextField
									id="main-search"
									variant="filled"
									placeholder="e.g. I want to eat cheap tacos"
									hiddenLabel
									InputProps={{ disableUnderline: true }}
									fullWidth
									sx={{
										marginTop: 2,
									}}
								/>
								<Typography
									variant="h4"
									component="h4"
									align="center"
									sx={{ my: 2 }}
								>
									- or -
								</Typography>
								<Typography
									fontSize={20}
									component="h4"
									color="on_surface.medium"
									align="center"
								>
									Undecided? Build a randomizer
								</Typography>

								<Button
									variant="outlined"
									sx={{
										width: "fit-content",
										mx: "auto",
										borderRadius: 8,
										mt: 1,
									}}
									onMouseEnter={trigger}
								>
									<animated.span style={style}>
										<RestaurantIcon />
									</animated.span>

									<ArrowForwardIosIcon
										sx={{ ml: 3 }}
										fontSize="8"
									/>
								</Button>
							</Box>
						</Box>
						{/* 
				<h1>Home</h1>
				<p>
					<Link to="/login">Login</Link>
				</p>
				<p>
					<Link to="/signup">Sign up</Link>
				</p>
				<p>
					<Link to="/dashboard">Dashboard</Link>
				</p>
			 */}
					</Box>

					{Headers.map((color, index) => {
						if (index === 0) {
							return null;
						} else {
							return (
								<Box
									key={index}
									sx={{
										height: "100vh",
										bgcolor: Colors[index],
									}}
									id={color}
								/>
							);
						}
					})}
				</Box>
				{/* </SimpleBar> */}
			</Box>
		</>
	);
};

const mapStateToProps = (state) => ({
	theme: state.theme.darkMode,
});

export default connect(mapStateToProps, { asyncToggleTheme })(withRouter(Home));
