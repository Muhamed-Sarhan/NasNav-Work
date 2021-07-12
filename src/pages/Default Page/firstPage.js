import React from "react";
import Slider from "../../components/Slider";
import AllProducts from "../../components/Products";

const FirstPage = ({
  bestRef,
  cateRef,
  onSaleRef,
  myRef,
  products,
  category,
  offers,
  gender,
  filteredData,
  filteredDataOnSale,
  filterOnSaleSection,
  filterByGender,
}) => {
  return (
    <div>
      <Slider />
      <AllProducts
        bestRef={bestRef}
        cateRef={cateRef}
        onSaleRef={onSaleRef}
        myRef={myRef}
        products={products}
        category={category}
        offers={offers}
        gender={gender}
        filteredData={filteredData}
        filteredDataOnSale={filteredDataOnSale}
        filterOnSaleSection={filterOnSaleSection}
        filterByGender={filterByGender}
      />
    </div>
  );
};

export default FirstPage;
