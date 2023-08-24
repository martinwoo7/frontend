import axios from "axios";
import { toast } from "react-toastify";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export const setAxiosAuthToken = (token) => {
	if (typeof token !== "undefined" && token) {
		axios.defaults.headers.common["Authorization"] = "Token " + token;
	} else {
		delete axios.defaults.headers.common["Authorization"];
	}
};

export const toastOnError = (error) => {
	if (error.response) {
		toast.error(JSON.stringify(error.response.data));
	} else if (error.message) {
		toast.error(JSON.stringify(error.message));
	} else {
		toast.error(JSON.stringify(error));
	}
};

export const withRouter = (Component) => {
	const ComponentWithRouterProp = (props) => {
		const params = useParams();
		const location = useLocation();
		const navigate = useNavigate();
		return <Component {...props} router={{ location, navigate, params }} />;
	};
	return ComponentWithRouterProp;
};

export const isEmpty = (value) =>
	value === undefined ||
	value === null ||
	(typeof value === "object" && Object.keys(value).length === 0) ||
	(typeof value === "string" && value.trim().length === 0);
