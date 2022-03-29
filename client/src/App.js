import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./pages/SocialFeed";
import Recommendations from "./pages/Recommendations";
import SignUp2 from './pages/SignUp2';
import SignIn from './pages/SignIn';
import RateMovies from './pages/RateMovies';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Profile from './pages/Profile';
import Axios from 'axios';
import './App.css';
import Home from "./pages/Home/Home"

function App() {

  document.title = 'CineMake';
  
  const [userDetails,setUserDetails] = useState({
    loggedIn:'',
    firstName:''
  });

    //this needs to be here
    Axios.defaults.withCredentials = true;

  

    //get details on refresh
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn == true){ 
                setUserDetails({...userDetails,firstName: response.data.user[0].firstName, 
                                                loggedIn: response.data.loggedIn});
            }  
        })
    },[]);

  return (
    <div>
      <Navbar />
      <Home/>
      <Routes>
        <Route path="/signup" element={[<SignUp2 />, <SignIn/>]} />
        <Route path="/socialfeed" element={<SocialFeed />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/ratemovies" element={<RateMovies />} />
          <Route path="/profile" element={<Profile />} />
        <Route element={<ProtectedRoutes />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;