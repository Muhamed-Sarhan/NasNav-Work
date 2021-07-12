import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";

const routes = () => (
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/about" component={HomePage} />
    <Route path="/services" component={HomePage} />
    <Route path="/contact" component={HomePage} />
    <Route path="/shoppingNow" component={HomePage} />
  </Router>
);

export default routes;
