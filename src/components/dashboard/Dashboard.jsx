import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "../../utils/utils";

import { Container, AppBar, Typography, Toolbar, Button, Box} from "@mui/material";
import { logout } from "../login/LoginActions";

import NotesList from "../notes/NotesList";
import AddNote from "../notes/AddNote";

const Dashboard = (props) => {
	const [collapsed, setcollapsed] = useState(true);
	const { user } = props.auth;

	const onLogout = () => {
		props.logout();
	};

	const toggleNavbar = () => {
		setcollapsed(!collapsed);
	};

	return (
		<div>
			<AppBar bg="light">
				<Toolbar>

				</Toolbar>
				<Typography>Home</Typography>
				<Box className="d-flex align-items-center">
					<Box>
						User: <b>{user.username}</b>
					</Box>

					<Button onClick={onLogout}>Logout</Button>
				</Box>
				{/* </Collapse> */}
			</AppBar>
			<Container>
				<NotesList />
                <AddNote />
			</Container>
		</div>
	);
};

Dashboard.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(withRouter(Dashboard));
