import React from "react";
import '../App.css';
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";
import "./SocialFeed.css";

function SocialFeed() {
    return(
    <div>
        <h1>
            <div className="homeContainer">
                <Sidebar />
                <Feed />
                <Rightbar />
            </div>
        </h1>
    </div>
    )
}

export default SocialFeed;