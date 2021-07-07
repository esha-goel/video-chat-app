import { useState,useEffect } from "react";
import "./Sidebar.css";
import SidebarChat from './SidebarChat';
import {Avatar, IconButton} from "@material-ui/core";
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import db from './firebase';


const Sidebar = () => {

    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));

        return () => {
            unsubscribe();
        }
    },[]);

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
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
