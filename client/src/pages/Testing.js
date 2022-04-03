import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import TestPostList from "../components/TestPostList";
import Follow from "../components/Follow";
import "../App.css";

function Testing(){

    const [userDetails,setUserDetails] = useState({
        username:'',
        userID:''
      });

    const[postDetails, setPostDetails] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn === true){
                setUserDetails({...userDetails,username: response.data.user[0].username, 
                                               userID: response.data.user[0].id});
            }  
        })
    },[]);

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
            <Follow />
            <h1>Posts</h1>
            <button onClick={()=>(console.log(postDetails))}>Test</button>
            <TestPostList user={userDetails} posts={postDetails} />
        </div>
    )
}

export default Testing;