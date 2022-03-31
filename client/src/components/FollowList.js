import React from 'react';
import "../App.css";
import TestPost from "./TestPost";

function FollowList(props){
    if (props.usersFound.length > 0){
        return(
            <>
            {props.usersFound.slice(0,6).map((user,index)=>
                <div>
                    <h1>{user.username}</h1>
                </div>
            )}
            </>
        )
    } else {
        return(
            <div>
                No users found
            </div>
        )
    }

}

export default FollowList;