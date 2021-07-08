import React from 'react'
import AdidasProduct from '../Icons/AddidasProduct'

const BestCart = ({product}) => {
    return (
        <div className='bestCartStyle'>
            <div className='overlay'></div>
            <img src={product.imgOffer} className='bestImg'/>
            
            <div className='offerSection'>
            <h1>{product.title}</h1>
            <h4>{product.caption}</h4>
            <AdidasProduct/>
            </div>
            
        </div>
    )
}

export default BestCart
