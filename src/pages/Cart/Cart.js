import React from "react";
import {useSelector, useDispatch} from "react-redux";

import CartItems from "../../components/CartItems/CartItems";

import "../../index.css";
import "./Cart.css";

function Cart() {

  const cartProducts = useSelector(state => state?.cartItems);
  const cartTotal = useSelector(state => state?.cartItemsTotal);

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__text">
          <h1 className="cart__title">Cart:</h1>
        </div>
        <CartItems cartProducts={cartProducts} />
        <div className="cart__total">
          <h3 className="cart__total-text">Total: ${parseInt(cartTotal).toFixed()}</h3>
          <button>Up to Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
