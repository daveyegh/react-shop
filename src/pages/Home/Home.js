import React from "react";
import { Link } from "react-router-dom";

import "../../index.css";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="home__inner">
          <div className="home__text">
            <h1 className="home__title">
              Online Store with everything you may need
            </h1>
            <p className="home__subtitle">
              Just click the Shop button and go to the shop page to buy our
              production
            </p>
            <Link className="home__link" to="/shop">
              <button className="home__button">Shop</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
