import React, {useState} from "react";
import '../App.css';
import Axios from 'axios';
import './SignUp2.css';
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";


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

    

    function director() {

        this.construct = function(builder) {
            builder.step1();
            builder.step2();
            return builder.get();
        }


        /* build() {
            const user = new Object();
            return user;
        } */
    }

    function userBuilder() {
        this.user = null;

        this.step1 = function () {
            this.user = new user();
        };
    
        this.step2 = function () {
            this.user.addInfo();
        };
    
        this.get = function () {
            return this.user;
        };

    }

    function user() {
        this.birthday = null;

        this.addInfo = function () {
            this.firstName = values.firstName;
            this.lastName = values.lastName;
            this.username = values.username;
            this.password = values.password;
        }

    }

    /* class userBuilder {
        constructor(firstName, lastName) {
            this.firstName = values.firstName;
            this.lastName = values.lastName;
            return this;
        }
        constructor(username) {
            this.username = values.username;
            return this;
        }
        constructor(password) {
            this.password = values.password;
            return this;
        }
    } */
    
    const handleSubmit = function(firstName,lastName,username,password){
        
        console.log("beep boop");
        var Director = new director();
        var UserBuilder = new userBuilder();
        var User = Director.construct(UserBuilder);
        console.log("User: ");
        console.log(user);


        // const user = new Object.userBuilder(values.firstName, values.lastName, values.username, values.password);
        
        Axios.post('http://localhost:3001/api/insert', 
        {firstName: User.firstName,
         lastName: User.lastName,
         username: User.username,
         password: User.password});
    }

    return(
    <div>
        <h1>
            Sign Up
        </h1>

        <div className="form-container">
            <form className = "register-form">

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