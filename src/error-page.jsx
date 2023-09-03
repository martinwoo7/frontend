import { useRouteError } from "react-router-dom";
import { Container } from "@mui/material";

const ErrorPage = () => {
	const error = useRouteError();
	console.error(error);

	return (
		<Container className="d-flex flex-column align-items-center justify-content-center w-100 vh-100">
			<h1 className="mb-4 fw-bold">Oops!</h1>
			<p>Sorry, an unexpected error has occured.</p>
			<p className="text-body-tertiary">
				<i >{error.statusText || error.message}</i>
			</p>
		</Container>
	);
};

export default ErrorPage;
