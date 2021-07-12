import React from "react";
import GeneralNav from "./GeneralNav";
import BrandsNav from "./BrandsNav";
import Categories from "./Categories";
import MobileMenu from "./MobileMenu";

const Navs = () => {
  return (
    <div className="navsContainer">
      <GeneralNav />
      <BrandsNav />
      <Categories />
      <MobileMenu />
    </div>
  );
};

export default Navs;
