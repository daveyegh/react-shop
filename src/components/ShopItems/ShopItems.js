import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./ShopItems.css";

function ShopItems({products}) {
  const dispatch = useDispatch();
  return (
    <div className="shop__items">
      {products.map((item) => {
        return (
          <div className="shop__item" key={item.id}>
            <img className="shop__item-img" alt={item.title} src={item.image} />
            <h2 className="shop__item-title">{item.title}</h2>
            <p className="shop__item-description">{item.description}</p>
            <div className="shop__item-row">
              <button className="shop__item-buy" onClick={() => {
                dispatch({
                  type: 'ADD_TO_CART',
                  data: item,
                })
                dispatch({
                  type: 'SET_TOTAL'
                })
              }}>
                  Buy
              </button>
              <span className="shop__item-price">${item.price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShopItems;
