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
        <div className="form-container">
            <form className = "register-form">
                <input 
                onChange={handleFirstNameInputChange}
                value={values.firstName}
                className="form-field"
                placeholder="First Name"
                name="firstName">
                </input>
                <input
                onChange={handleLastNameInputChange}
                value={values.lastName}
                className="form-field"
                placeholder="Last Name"
                name="lastName">
                </input>
                <input
                onChange={handleUsernameInputChange}
                value={values.userame}
                className="form-field"
                placeholder="Username"
                name="username">
                </input>
                <input
                onChange={handlePasswordInputChange}
                value={values.password}
                className="form-field"
                placeholder="Password"
                name="password">
                </input>
            </form>
            <button
            onClick = {handleSubmit}
            >
                Submit
            </button>
        </div>
    </div>
    )
}

export default SignUp2;