import React from 'react';
import Axios from 'axios';

function ReplyList(props){

    return(
        <div>
            <>
                {props.replies.map((reply, index)=> <div>
                    <p>{reply.author} : {reply.reply}</p>
                </div>)}
            </>
        </div>
    )
}

export default ReplyList;