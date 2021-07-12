import React from "react";
import { Link } from "react-router-dom";

const CateCart = ({ product }) => {
  return (
    <div className="cateCartStyle">
      <div className="o-verlay"></div>
      <img src={product.imgCate} className="cateImg" />
      <div className="exploreSection">
        <h4>{product.gender}</h4>
        <Link to="/about" className="explore">
          Explore
        </Link>
      </div>
    </div>
  );
};

export default CateCart;
