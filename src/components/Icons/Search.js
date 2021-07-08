import React from 'react'
import search from '../../images/Path 774.svg'

const Search = () => {
    return (
        
        <div className='searchArea'>
        <img src={search} alt='Search'/>
        <input placeholder='Search' />
        </div>
        
    )
}

export default Search