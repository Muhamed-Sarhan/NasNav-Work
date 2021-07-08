import React from 'react'
import GeneralNav from './GeneralNav'
import BrandsNav from './BrandsNav'
import Categories from './Categories'

const Navs = () => {
    return (
        <div className='navsContainer'>
            <GeneralNav/>
            <BrandsNav/>
            <Categories/>
        </div>
    )
}

export default Navs
