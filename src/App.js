import React from 'react';
import {dataStore} from "./data/dataStore";
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import ShopConnector from './components/ShopConnector';

export default class App extends React.Component {
    render() {
        return <Provider store={dataStore}>
            <BrowserRouter>
                <Switch>
                    <Route path="/shop" component={ShopConnector}/>
                    <Redirect to="/shop"/>
                </Switch>
            </BrowserRouter>
        </Provider>
    }
}