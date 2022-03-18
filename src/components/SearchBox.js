import React from 'react';

function SearchBox(props){
    return(
        <div className ='col col-sm-4'>
            <input
             className="form-control"
             value={props.value}
             onChange={(event)=> props.setSearchValue(event.target.value)}
             placeholder="Search..."
            ></input>
        </div>
    )
}

export default SearchBox;