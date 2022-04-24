import React,{useState, useEffect} from "react";
import '../App.css';
import Sidebar from "../components/Sidebar/Sidebar";
import ProfileFeed from "../components/Feed/ProfileFeed";
import Rightbar from "../components/Rightbar/Rightbar";
import logo from './propic.png';
import background from './pbg.jpg';
import './Profile.css';
import Axios from 'axios';


function Profile() {

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
        <div className="profile">
            <Sidebar />
             <div className="profileRight">
                <div className="profileRightTop">
                    <div className-="profileCover">
                        <img className="profileCoverImg" 
                            src={background} 
                            alt=""/>
                        <img className="profileUserImg" 
                            src={logo} 
                            alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">John Doe</h4>
                        <span className="profileInforDesc">The Roger Elbert of the West</span>
                    </div>
                    </div>
                <div className="profileRightBottom">
                 
                 <Rightbar />
                </div>
                <ProfileFeed user={userDetails} posts={postDetails}/>
            </div>
        </div>
    )
}

export default Profile;