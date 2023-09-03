import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	Container,
	Button,
	FormGroup,
	FormLabel,
	Input,
	Alert,
} from "@mui/material";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { withRouter } from "../../utils/utils";
import { signupNewUser } from "./SignupActions";

const Signup = (props) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onSignupClick = () => {
		const userData = {
			username: username,
			password: password,
		};
		// console.log("Sign up " + userData.username + " " + userData.password);
		props.signupNewUser(userData);
	};

	return (
		<Container>
			<h1>Signup</h1>

			<FormGroup id="usernameId">
				<FormLabel>User Name</FormLabel>
				<Input
					invalid={props.createUser.usernameError ? true : false}
					type="text"
					name="username"
					placeholder="Enter username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<Alert severity="error">
					{/* Oh noes! That username is already taken */}
					{props.createUser.usernameError}
				</Alert>
			</FormGroup>

			<FormGroup id="passwordId">
				<FormLabel>Password</FormLabel>
				<Input
					invalid={props.createUser.passwordError ? true : false}
					type="password"
					name="password"
					placeholder="Enter password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Alert severity="error">
					{/* Oh noes! Inavlid password */}
					{props.createUser.passwordError}
				</Alert>
			</FormGroup>

			<Button color="primary" onClick={onSignupClick}>
				Sign up
			</Button>
			<p className="mt-2">
				Already have an account? <Link to="/login">Login</Link>
			</p>
		</Container>
	);
};

Signup.propTypes = {
	signupNewUser: PropTypes.func.isRequired,
	createUser: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
	createUser: state.createUser,
});

export default connect(mapStateToProps, {
	signupNewUser,
})(withRouter(Signup));
