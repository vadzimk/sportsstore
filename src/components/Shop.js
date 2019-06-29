import React, {Component} from 'react';
import {CategoryNavigation} from "./CategoryNavigation";
import {ProductList} from "./ProductList";
import {CartSummery} from "./CartSummery";

export class Shop extends Component {
    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        this.props.history.push("/shop/cart");
    }

    render() {

        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">
                        Sports Store
                    </div>
                    <CartSummery {...this.props.cartReducer}/>
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation
                        baseUrl="/shop/products"
                        categories={this.props.shopReducer.categories}
                    />
                </div>
                <div className="col-9 p-2">
                    <ProductList
                        products={this.props.products}
                        addToCart={ this.handleAddToCart }
                    />
                </div>
            </div>
        </div>
    }
}
