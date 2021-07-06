import { useState,useEffect } from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";


const SidebarChat = ({addNewChat}) => {

    const [seed,setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const createChat = () => {
        const roomName = prompt("Please enter room name");

        if(roomName)
        {
            // do database thing
            console.log(roomName);
        }
    }

    return !addNewChat?(
        <div className="sidebarChat">
            {/* generates random avatars */}
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>

    )
}

export default SidebarChat
