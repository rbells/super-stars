import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import SocialFeed from "./components/SocialFeed";
import Recommendations from "./components/Recommendations";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignUp from './components/SignUp';
import './App.css';

function App() {
  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/socialfeed" element={<SocialFeed />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
  );
}

export default App;