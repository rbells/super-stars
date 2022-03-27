import React, {useEffect, useState} from "react";
import Axios from 'axios';
import '../App.css';

function SocialFeed() {

    const [user, setUser] = useState('');

    Axios.defaults.withCredentials = true;
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn == true){
                setUser(response.data.user[0].firstName);
                console.log(response.data.user[0].firstName);
            }  
        })
    },[]);

    return(
    <div>
        <h1>
            Social Feed for
            {user}
        </h1>
    </div>
    )
}

export default SocialFeed;