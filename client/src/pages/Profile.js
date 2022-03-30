import React from "react";
import '../App.css';
import Sidebar from "../components/Sidebar/Sidebar";
import Feed from "../components/Feed/Feed";
import Rightbar from "../components/Rightbar/Rightbar";
import './Profile.css';




function Profile() {
    return(
        <div className="profile">
            <Sidebar />
             <div className="profileRight">
                <div className="profileRightTop">
                    <div className-="profileCover">
                        <img className="profileCoverImg" Scr="assets/post/3.jpeg" alt=""/>
                        <img className="profileUserImg" scr="assets/person/7.jpeg" alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Superstars</h4>
                        <span className="profileInforDesc">Hello my friends</span>
                    </div>
                    </div>
                <div className="profileRightBottom">
                 <Feed />
                 <Rightbar />
                </div>
            </div>
        </div>
    )
}

export default Profile;