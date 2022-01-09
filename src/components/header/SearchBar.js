import { InputHandler } from 'concurrently'
import React from 'react'

function SearchBar({placeholder, data}) {
    return (
        <div classeName ="search">
            <div classeName="SearchInputs">
                <input type="text" />
                <div classeName="searchIcon"></div>
            </div>
            <div classeName="dataResult"></div>
            
        </div>
    )
}

export default SearchBar
