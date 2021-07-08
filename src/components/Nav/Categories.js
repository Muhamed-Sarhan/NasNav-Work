import React from 'react'
import Category from '../Icons/Category'
import HomeIcon from '../Icons/HomeIcon'
import Brands from '../Icons/brands'
import Account from '../Icons/Account'

const Categories = () => {
  return (
    <>
    <div className='Cnav'>
    <div className='categoryBar'>
        <h5>Men</h5>
        <h5>Women</h5>
        <h5>Unisex</h5>
        <h5>Kids</h5>
        <h5>Best Seller</h5>
        <h5>New Arrival</h5>
        <h5 className='categoryBarItemOffers'>Offers</h5>
      </div>
      </div>
      <div className='mobile-nav-down'>
      <div className='menu-mobile'>
      

      <div className='mobile-icon'>
      <HomeIcon />
      <p>Home</p>
    </div>

    <div className='mobile-icon'>
    <Category />
    <p>Categories</p>
  </div>

  <div className='mobile-icon'>
  <Brands />
  <p>Brands</p>
</div>

<div className='mobile-icon'>
<Account />
<p>Account</p>
</div>

       

      </div>
      </div>
      
      </>
  )
}

export default Categories
