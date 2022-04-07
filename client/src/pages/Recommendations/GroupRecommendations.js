import React, {useState, useEffect} from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import FriendsList from '../../components/FriendsList.js';
import Selection from './Selection';
import Axios from 'axios';

function GroupRecommendations(props){

    const [friendsListID, setFriendsListID] = useState([]);
    const [friendsState, setFriendsState] = useState([]);
    const [watchGroup, setWatchGroup] = useState([]);
    const [finalClick, setFinalClick] = useState(false);
    const [poster, setPoster] = useState("https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg") 

    const getFriendsList = (user) =>{
        Axios.post("http://localhost:3001/api/getfriendslist",{userID: user}).then((response) =>{
            setFriendsListID(response.data);
        })
    }

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

    useEffect(()=>{
        getFriendsList(props.user.user_id);
    }, [props.user])

    useEffect(()=>{
        for(let i=0; i < friendsListID.length; i++){
            changeIDtoUsername(friendsListID[i].friend_id);
        }
    },[friendsListID])


    const test = () =>{
        console.log(watchGroup);
    }

    const addToWatchGroup = (title) =>{
        setWatchGroup([...watchGroup, title]);
    };

    const handleFinalClick = () =>{
        setFinalClick(true);
    }


    if (finalClick == true){
        return(
            <div>
                <h1>{props.user.firstName}'s Watch Group</h1>
                {watchGroup.map((friend, index)=> (
                    <h1>{friend}</h1>
                ))}
                <img src={poster}></img>
            </div>
        )
    } else {
        return(
            <div>
                <h1>Select Your Watch Group</h1>
                <>
                {friendsState.map((friend, index)=> (
                        <Selection addToSelections={addToWatchGroup} title={friend}/>
                ))}
                </>
                <div>
                    <button onClick={handleFinalClick}>Give Us A Movie!</button>
                </div>
            </div>
        )
    }
}

export default GroupRecommendations;