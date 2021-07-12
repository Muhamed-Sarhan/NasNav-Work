import React from "react";
import Cart from "../Icons/Cart";
import Wishlist from "../Icons/Wishlist";
import User from "../Icons/User";
import Search from "../Icons/Search";
import SearchMobile from "../Icons/SearchMobile";
import Adidas from "../Icons/Adidas";
import Menu from "../Icons/Menu";

export default function BrandsNav() {
  return (
    <div className="Bnav">
      <div className="Fpart">
        <div className="search-part">
          <Search />
        </div>
        <div className="munu-part">
          <Menu />
        </div>
      </div>

      <div className="partBb">
        <Adidas />
      </div>

      <div className="partCb">
        <div className="rightCartS">
          <SearchMobile />
        </div>

        <div className="rightCart">
          <Cart />
          <p>Cart</p>
        </div>

        <div className="rightCart">
          <Wishlist />
          <p>Wishlist</p>
        </div>

        <div className="rightCartL">
          <User />
          <p>Login</p>
        </div>
      </div>
    </div>
  );
}
