import React, {useState, useEffect} from 'react';
import Topbar from '../../components/Topbar/Topbar';
import Axios from 'axios';
import FollowList from '../../components/FollowList';

export default function Home(props) {

    const [searchValue, setSearchValue] = useState([]);
    const [usersFound, setUsersFound] = useState([]);

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

        }
    }, [searchValue])

    const test= ()=>{
        console.log(searchValue);
    }

    return(
        <div>
            <Topbar setSearchValue={setSearchValue}/>
            <FollowList usersFound={usersFound} handleClick={follow} searchValue={searchValue}/>
        </div>
    )
}