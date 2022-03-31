import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import FollowList from './FollowList';
import Axios from 'axios';

function Follow(){

    const [searchValue, setSearchValue] = useState([]);
    const [usersFound, setUsersFound] = useState([]);

    const getUserSearch = () =>{
        Axios.post("http://localhost:3001/api/usersearch",{
            search: searchValue
        }).then((response) =>{
            setUsersFound(response.data);
        })
    } 

    useEffect(()=>{
        getUserSearch(searchValue);
        if (searchValue == ''){
            console.log("nothing in serach value");
        }
    }, [searchValue])

    return(
        <div>
            Follow
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div>
                <FollowList usersFound={usersFound}/>
            </div>
        </div>
    )
}

export default Follow;