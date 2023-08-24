import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "../../utils/utils";

import {
	Container,
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
	NavLink,
} from "reactstrap";
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
			<Navbar bg="light">
				<NavbarBrand href="/">Home</NavbarBrand>
				{/* <NavbarToggler onClick={toggleNavbar} /> */}
				{/* <Collapse isOpen={!collapsed} navbar className="justify-content-end"> */}
				<Nav className="d-flex align-items-center">
					<NavItem>
						User: <b>{user.username}</b>
					</NavItem>

					<NavLink onClick={onLogout}>Logout</NavLink>
				</Nav>
				{/* </Collapse> */}
			</Navbar>
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
