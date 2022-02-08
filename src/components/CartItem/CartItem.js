import React from 'react';
import {useDispatch} from "react-redux";

import './CartItem.css';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="cart__item" key={product.id}>
            <img
                src={product.image}
                className="cart__img"
                alt={product.title}
            />
            <h4 className="cart__name">{product.title}</h4>
            <span className="cart__price">${product.price}</span>
            <div className="cart__quantity">
                <button
                    onClick={() => {
                        dispatch({
                            type: 'DECREASE_QUANTITY',
                            id: product.id,
                        })

                        dispatch({
                            type: 'SET_TOTAL',
                        })
                    }}
                    className="cart__quantity-button"
                >
                    -
                </button>
                <span className="cart__quantity-text">{product.quantity}</span>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'INCREASE_QUANTITY',
                            id: product.id,
                        })

                        dispatch({
                            type: 'SET_TOTAL',
                        })

                    }}
                    className="cart__quantity-button"
                >
                    +
                </button>
            </div>
            <button
                className="cart__delete"
                onClick={() => {
                    dispatch({type: 'REMOVE_PRODUCT', id: product.id});
                    dispatch({type: 'SET_TOTAL'})
                }}
            >
                Delete
            </button>
        </div>
    );
}

export default CartItem;