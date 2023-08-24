import thunk from "redux-thunk";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { signupReducer } from "./components/signup/SignupReducer";
import { loginReducer } from "./components/login/LoginReducer";
import { notesReducer } from "./components/notes/NotesReducer";

const { createReduxHistory, routerMiddleware, routerReducer } =
	createReduxHistoryContext({
		history: createBrowserHistory(),
	});

const middleware = [thunk, routerMiddleware];

export const store = configureStore({
	reducer: combineReducers({
		router: routerReducer,
		createUser: signupReducer,
		auth: loginReducer,
		notes: notesReducer
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

export const history = createReduxHistory(store);
