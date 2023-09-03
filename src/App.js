import React, { useMemo, useState } from "react";
import axios from "axios";

import { Route, Routes } from "react-router-dom";
import { HistoryRouter as Router } from "redux-first-history/rr6";
import { history } from "./store";
import requireAuth from "./utils/RequireAuth";

// Styling
import { ToastContainer } from "react-toastify";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Pages
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Layout from "./components/Layout";
import ErrorPage from "./error-page";

import { useSelector } from "react-redux";
import { getDesignTokens } from "./theme";

// Other
import { RemoveScrollBar } from "react-remove-scroll-bar";


if (window.location.origin === "http://localhost:3000") {
	axios.defaults.baseURL = "http://127.0.0.1:8000";
} else {
	axios.defaults.baseURL = window.location.origin;
}

// TODO: Move the dock navigation to martinwoo.ca
// and link everything to that
// Will have to make a mockup of the pages, then if the user clicks into,
// open a new tab with the page

const ProtectedComponent = requireAuth(Dashboard);
// React.createElement(requireAuth(Dashboard))
const App = () => {
	const [mode, setMode] = useState("dark");
	const darkMode = useSelector((state) => state.theme.darkMode);

	useMemo(() => {
		if (darkMode) {
			setMode("dark");
		} else {
			setMode("light");
		}
	}, [darkMode]);

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
	return (
		<ThemeProvider theme={theme}>
			<Router history={history}>
				{/* <RemoveScrollBar /> */}
				<ToastContainer
					hideProgressBar={true}
					newestOnTop={true}
					theme="colored"
				/>
				<Routes>
					<Route
						path="/"
						// element={<Layout />}
						errorElement={<ErrorPage />}
					>
						<Route index path="home" element={<Home />} />
						<Route path="signup" element={<Signup />} />
						<Route path="login" element={<Login />} />
						{/* <Route path="/dashboard" element={<ProtectedComponent />} /> */}
						<Route path="dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
			</Router>
		</ThemeProvider>
	);
};

export default App;
