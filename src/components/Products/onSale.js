import React from "react";
import { Link } from "react-router-dom";
import Prev from "../Icons/Prev";
import ProductCart from "./productCart";

const OnSale = ({
  gender,
  filterOnSaleSection,
  filteredDataOnSale,
  onSaleRef,
}) => {
  const scroll = (scrollOffset) => {
    onSaleRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="bestSellers">
      <div className="bestsellerHeader">
        <div className="bestsellerTitle">
          <h1 className="title">On Sale</h1>
          <h3 className="caption">
            Hurry up! catch these products before the sale ends.
          </h3>
        </div>
        <div className="bestButtons">
          <div className="custom-select">
            <select
              className="select-sel"
              placeholder={gender}
              onChange={filterOnSaleSection}
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
        <div className="prevDiv" ref={onSaleRef}>
          <button onClick={() => scroll(-290)} className="prev">
            <Prev />
          </button>
          {filteredDataOnSale.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          <button onClick={() => scroll(290)} className="next">
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

export default OnSale;
