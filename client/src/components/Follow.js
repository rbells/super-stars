import React, {useState, useEffect} from 'react';
import SearchBox from './SearchBox';
import FollowList from './FollowList';
import Axios from 'axios';

function Follow(props){

    const [searchValue, setSearchValue] = useState([]);
    const [usersFound, setUsersFound] = useState([]);
    const [userClicked, setUserClicked] = useState([]);

    const getUserSearch = () =>{
        Axios.post("http://localhost:3001/api/usersearch",{
            search: searchValue
        }).then((response) =>{
            setUsersFound(response.data);
        })
    }

    const follow = (user) =>{
        Axios.post("http://localhost:3001/api/follow",{
            user: props.user.userID,
            friend: user.id
        }).then((response) =>{
            console.log(response);
        })
    };

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
                <FollowList usersFound={usersFound} handleClick={follow}/>
            </div>
        </div>
    )
}

export default Follow;