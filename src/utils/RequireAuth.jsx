import React, { useEffect } from "react";
import { connect } from "react-redux";
import { push } from "redux-first-history";
import PropTypes from "prop-types";
import { withRouter } from "./utils";

const requireAuth = (Component) => {
	const AuthenticatedComponent = (props) => {
		const checkAuth = () => {
			if (!props.isAuthenticated) {
				const redirectAfterLogin = props.router.location.pathname;
				props.dispatch(push(`/login?next=${redirectAfterLogin}`));
			}
		};
        
		useEffect(() => {
			checkAuth();
		});

		return (
			<div>
				{props.isAuthenticated === true ? (
					<Component {...props} />
				) : null}
			</div>
		);
	};

	AuthenticatedComponent.propTypes = {
		isAuthenticated: PropTypes.bool.isRequired,
		location: PropTypes.shape({
			pathname: PropTypes.string.isRequired,
		}).isRequired,
		dispatch: PropTypes.func.isRequired,
	};

	const mapStateToProps = (state) => {
		return {
			isAuthenticated: state.auth.isAuthenticated,
			token: state.auth.token,
		};
	};
	return connect(mapStateToProps)(withRouter(AuthenticatedComponent));
};

export default requireAuth;
