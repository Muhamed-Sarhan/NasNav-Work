import React from 'react'
import ProductCart from './productCart'
import Prev from '../Icons/Prev';

const ScrollProducts = ({filteredData,scroll,myRef}) => {
    return (
        <div className='productList' >
        <div className='prevDiv' ref={myRef}>
        <button onClick={() => scroll(-300)} className='prev'><Prev/></button>
        {filteredData.map((product)=>(
            <ProductCart key={product.id} product={product}/>
        ))}
        <button onClick={() => scroll(300)} className='next'><Prev/></button>
        </div>
        </div>
    )
}

export default ScrollProducts
