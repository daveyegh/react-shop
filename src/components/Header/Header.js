import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import "../../index.css";
import {useSelector} from "react-redux";

function Header() {
  const productsLength = useSelector(state => state.cartItems);
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <div className="header__logo"><Link to="/" className="header__logo-link">React-Store</Link></div>
          <div className="header__menu">
            <ul className="header__list">
              <li className="header__item">
                <Link to="/" className="header__link">
                  Home
                </Link>
              </li>
              <li className="header__item">
                <Link to="/shop" className="header__link">
                  Store
                </Link>
              </li>
              <li className="header__item">
                <Link to="/about" className="header__link">
                  About
                </Link>
              </li>
              <li className="header__item">
                <Link to="/contact" className="header__link">
                  Contact
                </Link>
              </li>
              <li className="header__item">
                <Link to="/cart" className="header__link">
                  Cart
                </Link>
                <span className={'products-length'}>{productsLength.length}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
