import React from 'react';

import CartItem from "../CartItem/CartItem";

import './CartItems.css';

const CartItems = ({cartProducts}) => {
    return (
        <div className="cart__items">
            {!cartProducts.length ? (
                <h1>No products</h1>
            ) : (
                cartProducts?.map((item) => {
                    return (
                        <CartItem product={item} />
                    );
                })
            )}
        </div>
    )
}

export default CartItems;