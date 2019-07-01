import React from 'react';
import {Link} from 'reac-router-dom';
import {CartDetaisRows} from './CartDetailsRows';

export class CartDetails extends React.Component {
    getLinkClasses = () => `btn btn-secondary m-1
    ${this.props.cartItems === 0 ? "disabled" : ""}`;

    render() {
        return <div className="m-3">
            <h2 className="text-center">
                Yor cart
            </h2>
            <table className="tabel table-bordered table-striped">
                <thead>
                <tr>
                    <th>
                        Quantity
                    </th>
                    <th>
                        Product
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
                </thead>
                <tbody>
                <CartDetaisRows
                    cart={this.props.cart}
                    cartPrice={this.props.cartPrice}
                    updateQuantity={this.props.updateCartQuantity}
                    removeFromCart={this.props.removeFromCart}
                />
                </tbody>
            </table>
            <div className="text-center">
                <Link className="btn btn-primary m-1" to="/shop">
                    Continue Shopping
                </Link>
                <Link className={this.getLinkClasses()} to="/shop/checkout">
                    Checkout
                </Link>

            </div>
        </div>
    }
}