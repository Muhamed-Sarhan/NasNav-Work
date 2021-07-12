import React from "react";
import GeneralNav from "./GeneralNav";
import BrandsNav from "./BrandsNav";
import Categories from "./Categories";
import MobileMenu from "./MobileMenu";

const Navs = ({ handleToggle }) => {
  return (
    <div className="navsContainer">
      <GeneralNav />
      <BrandsNav handleToggle={handleToggle} />
      <Categories />
      <MobileMenu handleToggle={handleToggle} />
    </div>
  );
};

export default Navs;
