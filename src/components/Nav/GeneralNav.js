import React from "react";
import Left from "../Icons/Left";
import Menu from "../Icons/Menu";
import Phone from "../Icons/Phone";
import Right from "../Icons/Right";
import Yeshtery from "../Icons/Yeshtery";
import Track from "../Icons/Track";
import Location from "../Icons/Location";
import { Link } from "react-router-dom";

export default function GeneralNav() {
  return (
    <div className="allGnav">
      <div className="Gnav">
        <div className="partA">
          <Menu />
          <Yeshtery />
        </div>

        <div className="partB">
          <Right />
          <p>
            The search supports synonyms. Try searching for
            <Link to="/shoppingNow" className="shopNow">
              shop now
            </Link>
          </p>
          <Left />
        </div>

        <div className="partC">
          <div>
            <Phone />
            <p>Contact Us</p>
          </div>

          <div>
            <Track />
            <p>Track Order</p>
          </div>

          <div>
            <Location />
            <p>Find a Store</p>
          </div>
        </div>
      </div>
      <div className="yeshtry-mobile">
        <Link to="/about">
          <Yeshtery />
        </Link>
      </div>
    </div>
  );
}
