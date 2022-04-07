import React,{useState} from 'react';
import Axios from 'axios';
import ReplyList from './ReplyList';
import './TestPost.css';

function TestPost(props){

    const [replyClickDetails, setReplyClickDetails] = useState([]);

    const handleReplyClick = ()=>{
        let reply = prompt("Reply: ?")
        Axios.post('http://localhost:3001/api/reply', 
        {user_id: props.user.userID,
         original_id: props.id,
         reply: reply,
         author: props.user.username
        });
    };

    const handleSeeRepliesClick = () =>{
        console.log(props.id);
        Axios.post("http://localhost:3001/api/seereplies",{
            original_id: props.id
        }).then((response) =>{
            setReplyClickDetails(response.data);
            console.log(response.data);
    })
    }

    return(
        <div className="testPost">
            <p>{props.title}</p>
            <h4>{props.rating}, {props.review}</h4>
            <p>Written by: {props.author}</p>
            <div>
                <button onClick={handleReplyClick}>Reply</button>
                <button onClick={handleSeeRepliesClick}>See Replies</button>
            </div>
            <ReplyList replies={replyClickDetails}/>
        </div>
    )

}

export default TestPost;