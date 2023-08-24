import React, { useState } from "react";
import PropTypes from "prop-types";
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
			<Row>
				<Col md="4">
					<h1>Signup</h1>
					<Form>
						<FormGroup id="usernameId">
							<Label>User Name</Label>
							<Input
								invalid={
									props.createUser.usernameError
										? true
										: false
								}
								type="text"
								name="username"
								placeholder="Enter username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
							<FormFeedback>
								{/* Oh noes! That username is already taken */}
								{props.createUser.usernameError}
							</FormFeedback>
						</FormGroup>

						<FormGroup id="passwordId">
							<Label>Password</Label>
							<Input
								invalid={
									props.createUser.passwordError
										? true
										: false
								}
								type="password"
								name="password"
								placeholder="Enter password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<FormFeedback>
								{/* Oh noes! Inavlid password */}
								{props.createUser.passwordError}
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
