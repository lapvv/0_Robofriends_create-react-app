import React from "react";

const SearchBox = ({searchChange}) => {
    return(
        <div className="pa2">
            <input 
            className="bg-light-blue br3 pa3 ma2"
            type='search' 
            placeholder='who should we find'
            onChange={searchChange}
            />
        </div>    
    );
}

export default SearchBox;