import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import TestPostList from "../components/TestPostList";
import Follow from "../components/Follow";
import FriendsList from '../components/FriendsList';
import TestFeedList from '../components/TestFeedList';
import "../App.css";

function Testing(){

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
            <h1>Feed</h1>
            <TestFeedList friends={friendsListID} user={userDetails}/>
            <Follow user={userDetails}/>
            <h1>Friends</h1>
            <FriendsList user={userDetails}/>
            <h1>Posts</h1>
            <button onClick={()=>(console.log(postDetails))}>Test</button>
            <TestPostList user={userDetails} posts={postDetails} />
        </div>
    )
}

export default Testing;