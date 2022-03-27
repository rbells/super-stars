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
                    </li>
                </ul>
            </div>
            Sidebar
        </div>
    )
}