import {createStore, combineReducers} from 'redux';
import {shopReducer, cartReducer} from "./reducers";

//redux store
export const dataStore = createStore(combineReducers({shopReducer, cartReducer}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());