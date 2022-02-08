import axios from "axios";
import React, { useEffect, useState } from "react";

import ShopItems from "../../components/ShopItems/ShopItems";
import {useDispatch, useSelector} from "react-redux";

function Shop() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'LOAD_PRODUCTS'})
  }, [])

  const products = useSelector(state => state.products);

  return (
    <div className="shop">
      <div className="container">
        <div className="shop__inner">
          {/*<ShopFilter setCategoryItems={setProducts} />*/}
          <ShopItems products={products} />
        </div>
      </div>
    </div>
  );
}

export default Shop;
