import React from "react";
import thunk from "redux-thunk";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

const { createReduxHistory, routerMiddleware, routerReducer } =
	createReduxHistoryContext({
		history: createBrowserHistory(),
	});

const middleware = [thunk, routerMiddleware];

export const store = configureStore({
	reducer: combineReducers({
		router: routerReducer,
	}),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(middleware),
});

export const history = createReduxHistory(store);
