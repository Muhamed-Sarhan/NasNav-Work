import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="Cnav">
      <div className="categoryBar">
        <Link to="/about">Men</Link>
        <Link to="/about">Women</Link>
        <Link to="/about">Unisex</Link>
        <Link to="/about">Kids</Link>
        <Link to="/about">Best Seller</Link>
        <Link to="/about">New Arrival</Link>
        <Link to="/about" className="categoryBarItemOffers">
          Offers
        </Link>
      </div>
    </div>
  );
};

export default Categories;
