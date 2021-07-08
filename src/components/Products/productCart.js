import React from 'react'

const ProductCart = ({product}) => {

    

    return (
        <div className='cartStyle'>
            <img src={product.productImg} className='productImg'/>
            <h4>{product.title}</h4>
            <div className='productDetails'>
             <div className='productsCost'>
             <h2 className='currentName'>{product.currentPrice} {product.currency}</h2>
             <div className='saleAndOld'>
             <h5 className='oldPrice'>{product.oldPrice}{product.currency}</h5>
             <div className='saleOff'>
             <h6>{Math.floor((product.currentPrice/product.oldPrice)*100)} % off</h6>
             </div>
             </div>
             </div>
             <div>
             <img className='brandFromDataImg' src={product.brandImg}/>
             </div>
            </div>
            <h5 className='gnena'>Picked From <strong>{product.pickedFrom}</strong></h5>
        </div>
    )
}

export default ProductCart
