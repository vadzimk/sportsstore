import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadData, addToCart, clearCart,removeFromCart, updateCartQuantity} from "../data/actionCreators";
import {DATA_TYPES} from "../data/types";
import {Shop} from "./Shop";
import {CartDetails} from "./CartDetails";

//calling this store is incorrect it is traditionally called state
const mapStateToProps = (dataStore) => {


    return {
        ...dataStore
    }
};

const mapDispatchToProps = {
    loadData,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart
};

const filterProducts = (products = [], category) => (
    (!category || category === 'All')
        ? products
        : products.filter(p => p.category.toLowerCase() === category.toLowerCase())
);


//:category is a variable in the path
class ShopConnector extends React.Component {

    componentDidMount() {
        this.props.loadData(DATA_TYPES.CATEGORIES);
        this.props.loadData(DATA_TYPES.PRODUCTS);

    }

    render() {
         console.log(this.props)
        return (
            <Switch>
                <Route
                    path="/shop/products/:category?"
                    render={(routeProps) =>
                        <Shop
                            {...this.props}
                            {...routeProps}
                            products={filterProducts(this.props.shopReducer.products, routeProps.match.params.category)}
                        />
                    }
                />
                <Route
                    path="/shop/cart"
                    render={(routeProps)=>
                        <CartDetails {...this.props}{...routeProps}/>
                    }
                />
                <Redirect to="/shop/products"/>
            </Switch>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopConnector);