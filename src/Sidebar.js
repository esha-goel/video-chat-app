import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';


const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__header__right">
                    {/* IconButton adds effect */}
                    <IconButton color='inherit'> 
                        <ChatIcon />
                    </IconButton> 
                    <IconButton color='inherit'> 
                        <MoreVertIcon />
                    </IconButton> 
                </div>
            </div>

            <div className="sidebar__search">
                <SearchOutlinedIcon />
                <input type="text" placeholder="Search for a chat"/>
            </div>

            <div className="sidebar__chats">
                {/* SidebarChat */}
                <SidebarChat addNewChat/>
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
