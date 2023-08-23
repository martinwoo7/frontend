import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	Button,
	Row,
	Col,
	Form,
	FormGroup,
	Input,
	FormFeedback,
    Label
} from "reactstrap";

const Login = () => {
	const [password, setPassword] = useState("");
	const [username, setUsername] = useState("");

	const onLoginClick = () => {
		const userData = {
			username: username,
			password: password,
		};
		console.log("Login " + userData.username + " " + userData.password);
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
							<FormFeedback invalid>
								Oh noes! This username is taken
							</FormFeedback>
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
							<FormFeedback invalid>Oh noes!</FormFeedback>
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
export default Login;
