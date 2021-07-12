import React from "react";
import Category from "../Icons/Category";
import HomeIcon from "../Icons/HomeIcon";
import Brands from "../Icons/brands";
import Account from "../Icons/Account";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  return (
    <div className="mobile-nav-down">
      <div className="menu-mobile">
        <Link to="/" className="mobile-icon">
          <HomeIcon />
          <p>Home</p>
        </Link>

        <Link to="/about" className="mobile-icon">
          <Category />
          <p>Categories</p>
        </Link>

        <Link to="/about" className="mobile-icon">
          <Brands />
          <p>Brands</p>
        </Link>

        <Link to="/about" className="mobile-icon">
          <Account />
          <p>Account</p>
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
