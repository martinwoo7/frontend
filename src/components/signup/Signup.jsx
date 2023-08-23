import React, { useState } from "react";
import {
	Container,
	Button,
	Row,
	Col,
	Form,
	FormGroup,
	Label,
	Input,
	FormFeedback,
} from "reactstrap";
import { Link } from "react-router-dom";

const Signup = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onSignupClick = () => {
		const userData = {
			username: username,
			password: password,
		};
		console.log("Sign up " + userData.username + " " + userData.password);
	};

	return (
		<Container>
			<Row>
				<Col md="4">
					<h1>Signup</h1>
					<Form>
						<FormGroup id="usernameId">
							<Label>User Name</Label>
							<Input
								type="text"
								name="username"
								placeholder="Enter username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormFeedback invalid>
								Oh noes! That username is already taken
							</FormFeedback>
						</FormGroup>

						<FormGroup id="passwordId">
							<Label>Password</Label>
							<Input
								type="password"
								name="password"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormFeedback invalid>
								Oh noes! Inavlid password
							</FormFeedback>
						</FormGroup>
					</Form>
					<Button color="primary" onClick={onSignupClick}>
						Sign up
					</Button>
					<p className="mt-2">
						Already have an account? <Link to="/login">Login</Link>
					</p>
				</Col>
			</Row>
		</Container>
	);
};

export default Signup;
