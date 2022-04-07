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

    if (props.posts.length > 0)
    {
        return(
            <>
                {props.posts.map((post, index)=> <div>
                    <TestPost user={props.user}
                              id={post.id} 
                              title={post.title} 
                              review={post.review} 
                              rating={post.rating} 
                              author={post.author}/>
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