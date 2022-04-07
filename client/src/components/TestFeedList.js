import React,{useState, useEffect} from 'react';
import TestPost from '../components/TestPost';
import Axios from 'axios';

function TestFeedList(props) {

    const [friendsPosts, setFriendsPosts] = useState([]);

    const [friendsIDsState, setFriendsIDsState] = useState([]);

    const getFriendsPosts = (friendsIDs) =>{
        Axios.post("http://localhost:3001/api/getfriendsposts", {friendIDs: friendsIDs}).then((response) =>{
            setFriendsPosts(response.data);
        })
    }

    let friendIDs = [];

    useEffect(()=>{
        getFriendIDs(props.friends);
    },[props.friends])

    useEffect(()=>{
        getFriendsPosts(friendsIDsState);
    },[friendsIDsState])

    //turns objects into array of ids
    const getFriendIDs = (friends) =>{
        friendIDs = [];
        for (let i= 0; i< friends.length; i++){
            friendIDs = [...friendIDs,friends[i].friend_id]
        }
        setFriendsIDsState(friendIDs);
    }

    const test = () =>{
        console.log(friendsPosts);
    }

    if (friendsPosts.length > 0)
    {
        return(
            <div>
                <button onClick={test}>test</button>
                <>
                    {friendsPosts.map((post, index)=> <div>
                        <TestPost user={props.user}
                                id={post.id} 
                                title={post.title} 
                                review={post.review} 
                                rating={post.rating} 
                                author={post.author}/>
                    </div>)}
                </>
            </div>
        )
    }else{
        return(
            <div>
                No Posts Yet
            </div>
        )
    }
}

export default TestFeedList;