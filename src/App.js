import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";

import "./index.css";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
