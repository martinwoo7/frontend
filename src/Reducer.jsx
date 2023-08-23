import { combineReducers } from "@reduxjs/toolkit";
import { createReduxHistoryContext} from "redux-first-history";
import { createBrowserHistory } from "history";

const { createReduxHistory, routerMiddleware, routerReducer} = createReduxHistoryContext({
    history: createBrowserHistory(),
})
const createRootReducer = (history) => { 
    combineReducers({
        router: routerReducer
    })
 }
