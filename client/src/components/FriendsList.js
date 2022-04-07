import React,{useEffect, useState} from 'react';
import Axios from 'axios';

function FriendsList(){

    const [userDetails,setUserDetails] = useState({
        username:'',
        userID:''
      });

    const [friendsListID, setFriendsListID] = useState([]);
    const [friendsState, setFriendsState] = useState([]);

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
            setFriendsListID(response.data);
        })
    }

    useEffect(()=>{
        getFriendsList(userDetails);
    }, [userDetails])


    let friend;
    let friends = [];
    const changeIDtoUsername = async (ID) =>{
        try{
            friends = [];
            await Axios.post("http://localhost:3001/api/IDtoUsername",{ID: ID}).then((response)=>{
                return friend = (response.data);
            }).then((data)=>{
                   friends = [...friends,data[0].username];    
            });
            setFriendsState(friends);
        } catch {
            //error shmerror
        }
    }

    const test =()=>{
        for(let i=0; i < friendsListID.length; i++){
            changeIDtoUsername(friendsListID[i].friend_id);
        }
    }

    const test2 = () =>{
        console.log(friendsState);
    }

    return(
        <div>
            <button onClick={test}>Test</button>
            <button onClick={test2}>Test 2</button>
            <>
            {friendsState.map((friend,index)=>
                <div>
                    <p>{friend}</p>
                </div>
            )}
            </>
        </div>
    )

}

export default FriendsList;