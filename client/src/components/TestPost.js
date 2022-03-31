import React from 'react';
import './TestPost.css';

function TestPost(props){
    return(
        <div className="testPost">
            <p>{props.title}</p>
            <h4>{props.rating}, {props.review}</h4>
            <p>Written by: {props.author}</p>
            <button>Reply</button>
        </div>
    )

}

export default TestPost;