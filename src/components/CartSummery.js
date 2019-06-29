import React from 'react';
import {Link} from 'react-router-dom';

export class CartSummery extends React.Component {
    getSummery = () => {
        if (this.props.cartItems > 0) {
            return <span>
                {this.props.cartItems} item(s),
                ${this.props.cartPrice.toFixed(2)}
            </span>
        } else {
            return <span>Your cart: (empty)</span>
        }
    };

    getLinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.cartItems === 0 ? "disabled" : ""}`;
    };

    render(){
        return <div className="float-right">
            <small>
                {this.getSummery()}
                <Link to="/shop/cart" className={this.getLinkClasses()}>
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>
        </div>
    }
}