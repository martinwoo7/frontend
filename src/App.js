import React from "react";
// import axios from "axios";

import { Route, Routes } from "react-router-dom";
import {HistoryRouter as Router} from 'redux-first-history/rr6'
import { history } from "./store";
import requireAuth from "./utils/RequireAuth";

// Styling
import { ToastContainer } from "react-toastify";

// Pages
import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

// axios.defaults.baseURL = "http://127.0.0.1:8000";
const ProtectedComponent = requireAuth(Dashboard)
// React.createElement(requireAuth(Dashboard))
const App = () => {
	return (
		<Router history={history}>
			<ToastContainer
				hideProgressBar={true}
				newestOnTop={true}
				theme="colored"
			/>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/login" element={<Login />} />
				<Route path="/dashboard" element={<ProtectedComponent/>} />
			</Routes>
		</Router>
	);
};

export default App;
