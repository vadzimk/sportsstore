import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {shopReducer, cartReducer} from "./reducers";
import {asyncActions} from "./asyncMiddleware";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//redux store
export const dataStore = createStore(combineReducers(
    {shopReducer, cartReducer}),
    composeEnhancers(applyMiddleware(asyncActions))
    );