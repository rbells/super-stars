import React, {useEffect, useState} from "react";
import Axios from 'axios';
import '../App.css';
import Home from '../pages/Home/Home';
import Feed from '../components/Feed/Feed';


function SocialFeed() {

    const [userDetails,setUserDetails] = useState({
        username:'',
        userID:''
      });

    const[postDetails, setPostDetails] = useState([]);

    const [friendsListID, setFriendsListID] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn === true){
                setUserDetails({...userDetails,username: response.data.user[0].username, 
                                               userID: response.data.user[0].id});
            }  
        })
    },[]);

    useEffect(()=>{
        getFriendsList(userDetails)
    },[userDetails])

    const getFriendsList = (user) =>{
        Axios.post("http://localhost:3001/api/getfriendslist",{userID: user.userID}).then((response) =>{
            setFriendsListID(response.data);
        })
    }

    const getPosts = (user) =>{
        Axios.post("http://localhost:3001/api/getposts",{userID: user.userID}).then((response) =>{
            setPostDetails(response.data);
        })
    }

    useEffect(()=>{
        getPosts(userDetails);
    }, [userDetails])

    return(
    <div>
        <Home user={userDetails}/>
        <Feed friends={friendsListID} user={userDetails}/>
    </div>
    )
}

export default SocialFeed;