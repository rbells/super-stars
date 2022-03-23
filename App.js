import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./components/SocialFeed";
import Recommendations from "./components/Recommendations";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import RateMovies from './components/RateMovies';
import Profile from './components/Profile';
import './App.css';

function App() {

  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/socialfeed" element={<SocialFeed />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ratemovies" element={<RateMovies />} />
          <Route path ="/profile" element={<Profile />} />
        </Routes>
      </div>
  );
}

export default App;