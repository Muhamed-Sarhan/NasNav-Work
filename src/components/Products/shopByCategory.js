import React from 'react'
import Prev from '../Icons/Prev';
import CateCart from './shopByCategoryCart';


const ShopByCategory = ({products , cateRef}) => {

    const scroll = (scrollOffset) => {
        cateRef.current.scrollLeft += scrollOffset;
      };


    return (
        <div className='bestSellers'>
         <div className='bestsellerHeader'>
            <div className='bestsellerTitle'>
            <h1 className='title'>Shop By Category</h1>
            <h3 className='caption'>Start shopping by your favourite category</h3>
            </div>
         </div>


        <div className='productList'>
        <div className='prevDiv' ref={cateRef}>
         <button onClick={() => scroll(-460)} className='prevCate'><Prev/></button>
         {products.map((product)=>(
            <CateCart key={product.id} product={product}/>
        ))}
         <button onClick={() => scroll(460)} className='nextCate'><Prev/></button>
         </div>
        </div>
        </div>
    )
}

export default ShopByCategory
