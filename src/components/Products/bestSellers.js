import React from "react";
import { Link } from "react-router-dom";
import Prev from "../Icons/Prev";
import ProductCart from "./productCart";

const BestSellers = ({ gender, filterByGender, filteredData, myRef }) => {
  const scroll = (scrollOffset) => {
    myRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="bestSellers">
      <div className="bestsellerHeader">
        <div className="bestsellerTitle">
          <h1 className="title">Best Sellers</h1>
          <h3 className="caption">Check out our best sellers</h3>
        </div>
        <div className="bestButtons">
          <div className="custom-select">
            <select
              className="select-sel"
              value={gender}
              onChange={filterByGender}
            >
              <option className="custom-options" value="all">
                All
              </option>
              <option className="custom-options" value="men">
                Men
              </option>
              <option className="custom-options" value="women">
                Women
              </option>
            </select>
          </div>
          <div className="web-view-all">
            <Link to="/about">View All</Link>
          </div>
        </div>
      </div>

      <div className="productList">
        <div className="prevDiv" ref={myRef}>
          <button onClick={() => scroll(-345)} className="prev">
            <Prev />
          </button>
          {filteredData.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          <button onClick={() => scroll(345)} className="next">
            <Prev />
          </button>
        </div>
      </div>

      <div className="mobile-view-all">
        <Link to="/about">View All</Link>
      </div>
    </div>
  );
};

export default BestSellers;
