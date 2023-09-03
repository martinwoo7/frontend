import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "../../utils/utils";
import { Link } from "react-router-dom";
import { Container, Button, FormGroup, Input, FormLabel } from "@mui/material";

import { connect } from "react-redux";

import { login } from "./LoginActions";

const Login = (props) => {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const onLoginClick = () => {
		const userData = {
			username: username,
			password: password,
		};
		// console.log("Login " + userData.username + " " + userData.password);
		props.login(userData, "/dashboard");
	};

	return (
		<Container>
			<h1>Login</h1>

			<FormGroup>
				<FormLabel>User name</FormLabel>
				<Input
					type="text"
					name="username"
					placeholder="Enter user name"
					value={username}
					onChange={(e) => {
						setUsername(e.target.value);
					}}
				/>
			</FormGroup>

			<FormGroup>
				<FormLabel>Your password</FormLabel>
				<Input
					type="password"
					name="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => {
						setPassword(e.target.value);
					}}
				/>
			</FormGroup>
			<Button color="primary" onClick={onLoginClick}>
				Login
			</Button>
			<p className="mt-2">
				Don't have an account? <Link to="/signup">Signup</Link>
			</p>
		</Container>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, {
	login,
})(withRouter(Login));
