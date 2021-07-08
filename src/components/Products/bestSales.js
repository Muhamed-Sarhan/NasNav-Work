import React from 'react'
import BestCart from './bestSalesCart'
import Prev from '../Icons/Prev';
import { Link } from 'react-router-dom';


const BestSales = ({products, bestRef}) => {

    const scroll = (scrollOffset) => {
        bestRef.current.scrollLeft += scrollOffset;
      };

    return (
        <div className='bestSellers'>
         <div className='bestsellerHeader'>
            <div className='bestsellerTitle'>
            <h1 className='title'>Best Offers</h1>
            <h3 className='caption'>Check out the latest discounts.</h3>
            </div>
            <div className='bestButtons'>
            <div className='web-view-all-S'>
            <Link to='/about'>View All</Link>
            </div></div>
         </div>

         <div className='productList'>
         <div className='prevDiv' ref={bestRef}>
          <button onClick={() => scroll(-680)} className='prevCate'><Prev/></button>
          {products.map((product)=>(
            <BestCart key={product.id} product={product}/>
        ))}
          <button onClick={() => scroll(680)} className='nextCate'><Prev/></button>
          </div>
         </div>
         <div className='mobile-view-all'>
         <Link to='/about' >View All</Link>
         </div>
        </div>
    )
}

export default BestSales
