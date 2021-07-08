import React from 'react'

const CateCart = ({product}) => {
    return (
        <div className='cateCartStyle'>
        <div className='o-verlay'></div>
            <img src={product.imgCate} className='cateImg'/>
            <div className='exploreSection'>
            <h4>{product.gender}</h4>
            <button type="button" className="explore">Explore</button>
            </div>
            
        </div>
    )
}

export default CateCart
