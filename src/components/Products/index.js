import React from "react";
import BestSellers from "./bestSellers";
import ShopByCategory from "./shopByCategory";
import OnSale from "./onSale";
import BestSales from "./bestSales";
import SpecialSelections from "./specialSelections";

const AllProducts = ({
  products,
  onSaleRef,
  bestRef,
  cateRef,
  myRef,
  category,
  offers,
  gender,
  filterByGender,
  filterOnSaleSection,
  filteredDataOnSale,
  filteredData,
}) => {
  return (
    <div className="container">
      <BestSellers
        myRef={myRef}
        filteredData={filteredData}
        gender={gender}
        filterByGender={filterByGender}
      />

      <ShopByCategory cateRef={cateRef} products={category} />

      <OnSale
        onSaleRef={onSaleRef}
        filteredDataOnSale={filteredDataOnSale}
        gender={gender}
        filterOnSaleSection={filterOnSaleSection}
      />

      <BestSales products={offers} bestRef={bestRef} />

      <SpecialSelections products={products} />
    </div>
  );
};

export default AllProducts;
