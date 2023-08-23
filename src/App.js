import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, history } from "./store";

import Home from "./components/Home";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Router history={history}>
					<Routes>
						<Route index path="/" element={Home} />
						<Route path="/signup" element={Signup} />
						<Route path="/login" element={Login} />
						<Route path="/dashboard" element={Dashboard} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
