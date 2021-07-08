import React from 'react';
import Left from '../Icons/Left';
import Menu from '../Icons/Menu';
import Phone from '../Icons/Phone';
import Right from '../Icons/Right';
import Yeshtery from '../Icons/Yeshtery';
import Track from '../Icons/Track';
import Location from '../Icons/Location';

export default function GeneralNav() {

  return (
    <div className='allGnav'>
    <div className='Gnav'>
      <div className='partA'>
        <Menu/>
        <Yeshtery/>
      </div>

      <div className='partB'>
        <Right />
        <p>
          The search supports synonyms. Try searching for
          <a to='/shoppingNow' className='shopNow'>
            shop now
          </a>
        </p>
        <Left />
      </div>

      <div className='partC'>
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
    <div className='yeshtry-mobile'><Yeshtery/></div>
    </div>
  );
}
