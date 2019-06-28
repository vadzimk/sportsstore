import {createStore} from 'redux';
import {shopReducer} from "./shopReducer";

//redux store
export const dataStore = createStore(shopReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());