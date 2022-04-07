import React, {useEffect, useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./pages/SocialFeed";
import Recommendations from "./pages/Recommendations/Recommendations";
import SoloRecommendations from './pages/Recommendations/SoloRecommendations';
import UserFilters from './pages/Recommendations/UserFilters';
import GroupRecommendations from './pages/Recommendations/GroupRecommendations';
import SignUp2 from './pages/SignUp2';
import SignIn from './pages/SignIn';
import RateMovies from './pages/RateMovies';
import ProtectedRoutes from './components/ProtectedRoutes';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Profile from './pages/Profile';
import Testing from './pages/Testing';
import Axios from 'axios';
import './App.css';


function App() {

  document.title = 'CineMake';
  
  const [userDetails,setUserDetails] = useState({
    loggedIn:'',
    firstName:'',
    user_id: ''
  });

    //this needs to be here
    Axios.defaults.withCredentials = true;

    //get details on refresh
    useEffect(()=>{
        Axios.get("http://localhost:3001/api/login").then((response) =>{
            if(response.data.loggedIn == true){ 
                setUserDetails({...userDetails,firstName: response.data.user[0].firstName, 
                                                loggedIn: response.data.loggedIn,
                                                user_id: response.data.user[0].id});
            }  
        })
    },[]);


    //This is here temporarily to make solo recommendations work
    let selections=[];

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/signup" element={[<SignUp2 />, <SignIn/>]} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/socialfeed" element={<SocialFeed />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/recommendations/solorecommendations" element={<SoloRecommendations selections={selections}/>} />
          <Route path="/recommendations/grouprecommendations" element={<GroupRecommendations user={userDetails}/>} />
          <Route path="/recommendations/userfilters" element={<UserFilters/>} />
          <Route path="/ratemovies" element={<RateMovies />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/testing" element={<Testing />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;