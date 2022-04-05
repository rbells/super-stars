import React from 'react';
import "./Sidebar.css";
// import FeedIcon from '@mui/icons-material/Feed';

export default function sidebar() {
    return (
        <div className="Sidebar">
            <div className="SidebarWrapper">
                <ul className="SidebarList">
                    <li className="SidebarListItem">
                        {/* <FeedIcon /> */}
                        <span className="SiderbarListItemText">Home</span>
                    </li>
                    <li className="SidebarListItem">
                        {/* <FeedIcon /> */}
                        <span className="SiderbarListItemText">Post</span>
                    </li>
                    <li className="SidebarListItem">
                        {/* <FeedIcon /> */}
                        <span className="SiderbarListItemText">Replies</span>
                    </li>
                    <li className="SidebarListItem">
                        {/* <FeedIcon /> */}
                        <span className="SiderbarListItemText">Messages</span>
                    </li>
                    <li className="SidebarListItem">
                        {/* <FeedIcon /> */}
                        <span className="SiderbarListItemText">Settings</span>
                    </li>
                </ul>
                    <button className="SidebarButton">Show More</button>
                    <hr className="SidebarHR"/>
                    <ul className="SidebarFriendsList">
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Teddie</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Finn</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Kirk</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Emily</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Cameron</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Riely</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Alexis</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Kelly</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Caitlin</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Danny</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Anthony</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Harry</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Sun</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Joe</span>
                        </li>
                        <li className="SidebarFriends">
                            <img className="SidebarFriendImg" scr="" alt=""/>
                            <span className="SidebarFriendName">Kat</span>
                        </li>

                    </ul>
            </div>
        </div>
    )
}