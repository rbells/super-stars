import "./Topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
    return (
        <div className="TopbarContainer">
            <div className="topbarLeft">
                <span className="logo">CineMake Social</span>
            </div>

            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon />
                    <input placeholder="Search for friends or reviews" className="search" />
                </div>
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="Timeline"></span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <PersonIcon />
                        <span className="topbarIconBadge">1</span>
                    </div>

                    <div className="topbarIconItem">
                        <ChatIcon />
                        <span className="topbarIconBadge">2</span>
                    </div>

                    <div className="topbarIconItem">
                        <NotificationsIcon />
                        <span className="topbarIconBadge">3</span>
                    </div>
                    
                </div>

                <img src="/assets/2.jpeg" alt="" className="topbarImage" />
            </div>

            
        </div>
    )
}