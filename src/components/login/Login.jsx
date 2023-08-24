import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "../../utils/utils";
import { Link } from "react-router-dom";
import {
	Container,
	Button,
	Row,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";

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
			<Row>
				<Col md="4">
					<h1>Login</h1>
					<Form>
						<FormGroup>
							<Label>User name</Label>
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
							<Label>Your password</Label>
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
					</Form>
					<Button color="primary" onClick={onLoginClick}>
						Login
					</Button>
					<p className="mt-2">
						Don't have an account? <Link to="/signup">Signup</Link>
					</p>
				</Col>
			</Row>
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
