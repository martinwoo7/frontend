import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import 'simplebar-react/dist/simplebar.min.css';
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { setCurrentUser, setToken } from "./components/login/LoginActions";
import { isEmpty } from "./utils/utils";

if (!isEmpty(localStorage.getItem("token"))) {
	console.log("found token")
	store.dispatch(setToken(localStorage.getItem("token")));
}
if (!isEmpty(localStorage.getItem("user"))) {
	const user = JSON.parse(localStorage.getItem("user"));
	store.dispatch(setCurrentUser(user, ""));
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
