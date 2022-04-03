import React,{useState} from 'react';
import TestPost from '../components/TestPost';
import Axios from 'axios';

function TestPostList(props) {

    const [author, setAuthor] = useState('');

    const changeIDtoUsername = (ID) =>{
            Axios.post("http://localhost:3001/api/IDtoUsername",{ID: ID}).then((response) =>{ 
                setAuthor(response.data[0].username); 
            })
            return(author);
    }

    const test = () =>{
        console.log(changeIDtoUsername(9));
    }

    if (props.posts.length > 0)
    {
        return(
            <>
            <button onClick={test}>Test2</button>
                {props.posts.map((post, index)=> <div>
                    <TestPost user={props.user.userID} id={post.id} title={post.title} review={post.review} rating={post.rating} author={changeIDtoUsername(post.user_id)}/>
                </div>)}
            </>
        )
    }else{
        return(
            <div>
                No Posts Yet
            </div>
        )
    }
}

export default TestPostList;