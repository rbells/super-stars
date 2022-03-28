import React, {useState} from "react";
import '../App.css';
import Axios from 'axios';


function SignUp2() {
    const[values, setValues] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password:''
    });

    const handleFirstNameInputChange = (e) =>{
        setValues({...values,firstName: e.target.value})
    }
    const handleLastNameInputChange = (e) =>{
        setValues({...values,lastName: e.target.value})
    }
    const handleUsernameInputChange = (e) =>{
        setValues({...values,username: e.target.value})
    }
    const handlePasswordInputChange = (e) =>{
        setValues({...values,password: e.target.value})
    }

    const handleSubmit = function(firstName,lastName,username,password){
        Axios.post('http://localhost:3001/api/insert', 
        {firstName: values.firstName,
         lastName: values.lastName,
         username: values.username,
         password: values.password});
    }

    return(
    <div>
        <h1>
            SignUp
        </h1>
        <head>
            <link rel="stylesheet" href="SignUp2.css"></link>
        </head>

        <div className="form-container">
            <form className = "register-form">
                <br></br>

                <label for="firstName">Enter your first name:</label>
                <br></br>
                <input 
                onChange={handleFirstNameInputChange}
                value={values.firstName}
                className="form-field"
                placeholder="First Name"
                name="firstName">
                </input>
                <br></br>
                <br></br>

                <label for="lastName">Enter your last name:</label>
                <br></br>
                <input
                onChange={handleLastNameInputChange}
                value={values.lastName}
                className="form-field"
                placeholder="Last Name"
                name="lastName">
                </input>
                <br></br>
                <br></br>


                <label for="username">Create your username:</label>
                <br></br>
                <input
                onChange={handleUsernameInputChange}
                value={values.userame}
                className="form-field"
                placeholder="Username"
                name="username">
                </input>
                <br></br>
                <br></br>

                <label for="password">Create your password:</label>
                <br></br>
                <input
                onChange={handlePasswordInputChange}
                value={values.password}
                className="form-field"
                placeholder="Password"
                name="password">
                </input>
                <br></br>
                <br></br>
            </form>
            <button
            onClick = {handleSubmit}
            >
                Submit
            </button>
            <br></br>
        </div>
    </div>
    )
}

export default SignUp2;