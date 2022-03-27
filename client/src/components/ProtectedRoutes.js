import React from 'react';
import SignUp2 from '../pages/SignUp2';
import {useNavigate, Outlet } from 'react-router-dom';
import Axios from 'axios';
import SignIn from '../pages/SignIn';

let loggedIn = false;

//this needs to be here
Axios.defaults.withCredentials = true;

//return true or false for signed in or not
const useAuth = () =>{
    Axios.get("http://localhost:3001/api/login").then((response) =>{
            console.log(response.data.loggedIn);
            if(response.data.loggedIn == true){
                loggedIn = true;
            }else{
                loggedIn = false;
            }
    })
    return loggedIn;
}


function ProtectedRoutes(){
    const isAuth = useAuth();
    //if authenticated go into nested route, else return sign in stuff
    return isAuth ? <Outlet/>: [<SignUp2 />, <SignIn />];
}

export default ProtectedRoutes;