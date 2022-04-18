import React from 'react';
import logo from './profile.jpg';
import "./Rightbar.css";

export default function Rightbar() {
    return (
        <div className="Rightbar">
            <div className="RightbarWrapper">
                <div className="BirthdayContainer">
                    <img className="BirthdayImg" src="" alt=""/>
                    <span className="BirthdayText">
                        <b>Finn</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <h4 className="RightbarTitle"> Online Friends</h4>
                <ul className="RigthbarFriendsList">
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Finn</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Emily</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Riely</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Kelly</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Danny</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Harry</span>
                    </li>
                    <li className="RigthbarFriends">
                        <div className="RightbarProfileImgContainer">
                            <img className="RightbarProfileImg" src={logo} alt=""></img>
                            <span clasName="RightbarOnline"></span>
                        </div>
                        <span className="RightbarUsername">Joe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}