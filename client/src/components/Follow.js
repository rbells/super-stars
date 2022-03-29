import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import Axios from 'axios';

function Follow(){

    const [searchValue, setSearchValue] = useState([]);
    const [usersFound, setUsersFound] = useState([]);

    const getUserSearch = () =>{
        Axios.get("http://localhost:3001/api/usersearch",{
            search: searchValue
        }).then((response) =>{
            console.log(response);
        })
    } 

    useEffect(()=>{
        getUserSearch(searchValue);
    }, [searchValue])

    return(
        <div>
            Follow
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
    )
}

export default Follow;