import React, {useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./pages/SocialFeed";
import Recommendations from "./pages/Recommendations";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './pages/SignUp';
import RateMovies from './pages/RateMovies';
import Profile from './pages/Profile';
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