import React,{useEffect, useState} from 'react';
import Axios from 'axios';

function FriendsList(props){

    const [userDetails,setUserDetails] = useState({
        username:'',
        userID:''
      });

      const [friendsList, setFriendsList] = useState([]);

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn === true){
                setUserDetails({...userDetails,username: response.data.user[0].username, 
                                               userID: response.data.user[0].id});
            }  
        })
    },[]);

    const getFriendsList = (user) =>{
        Axios.post("http://localhost:3001/api/getfriendslist",{userID: user.userID}).then((response) =>{
            setFriendsList(response.data);
            console.log("beep boop");
        })
    }

    const test =()=>{
        console.log(friendsList);
    }
    useEffect(()=>{
        getFriendsList(userDetails);
    }, [userDetails])

    return(
        <div>
            <button onClick={test}>Test</button>
            <>
            {friendsList.map((friend,index)=>
                <div>
                    <h1>{friend.friend_id}</h1>
                </div>
            )}
            </>
        </div>
    )

}

export default FriendsList;