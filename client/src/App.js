import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./pages/SocialFeed";
import Recommendations from "./pages/Recommendations";
import SignUp2 from './pages/SignUp2';
import SignIn from './pages/SignIn';
import RateMovies from './pages/RateMovies';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import './App.css';

function App() {
  
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
      <Routes>
        <Route path="/signup" element={[<SignUp2 />, <SignIn/>]} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/socialfeed" element={<SocialFeed />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/ratemovies" element={<RateMovies />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;