import React from 'react';
import "../App.css";
import TestPost from "./TestPost";

function FollowList(props){
    if (props.searchValue.length > 0){
        return(
            <>
            {props.usersFound.slice(0,6).map((user,index)=>
                <div>
                    <button onClick={()=>props.handleClick(user)}>{user.username}</button>
                </div>
            )}
            </>
        )
    } else {
        return(
            <div>
            </div>
        )
    }

}

export default FollowList;