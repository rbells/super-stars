import React, {useEffect, useState} from "react";
import '../App.css';
import Axios from 'axios';
import "./SignIn.css";

function SignIn() {

    const[values, setValues] = useState({
        givenUsername: '',
        givenPassword:''
    });

    const[loginStatus, setLoginStatus] = useState('');

    Axios.defaults.withCredentials = true;
    
    //Handle typing in the textboxes
    const handleUsernameInputChange = (e) =>{
        setValues({...values,givenUsername: e.target.value})
    }
    const handlePasswordInputChange = (e) =>{
        setValues({...values,givenPassword: e.target.value})
    }

    //handle the submit with a api post
    const handleSubmit = function(givenUsername, givenPassword){
        Axios.post('http://localhost:3001/api/login', 
        {givenUsername: values.givenUsername,
        givenPassword: values.givenPassword}).then((response) =>
        {
            if (response.data.message){
                setLoginStatus(response.data.message);
            }else{
                setLoginStatus("Hello " + response.data[0].firstName);
            }
        });
    }

    //Check if still logged in on refresh
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn === true){
                setLoginStatus(response.data.user[0].firstName);
            // console.log(response.data.user[0].firstName);
            }  
        })
    },[]);

    return(
    <div>
        <br></br>
        <h1 className="signTitle">
            Sign In
        </h1>
        <div className="form-container">
            <form className = "register-form">
                <label for="username">Enter your username:</label>
                <br></br>
                <input
                onChange={handleUsernameInputChange}
                value={values.givenUserame}
                className="form-field"
                placeholder="Username"
                type="username"
                name="username">
                </input>
                <br></br>
                <br></br>

                <label for="password">Enter your password:</label>
                <br></br>
                <input
                onChange={handlePasswordInputChange}
                value={values.givenPassword}
                className="form-field"
                placeholder="Password"
                type="password"
                name="password">
                </input>
            </form>
            <br></br>
            <button
            onClick = {handleSubmit}
            >
                Login
            </button>
        </div>
        <h1>
            {loginStatus}
        </h1>
    </div>
    )
}

export default SignIn;