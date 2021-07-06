import { useState,useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import './Chat.css';

const Chat = () => {
    const [seed,setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    return (
        <div className="chat">
            
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                </div>

                <div className="chat__headerRight">
                    <IconButton color='inherit'>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton color='inherit'>
                        <VideoCallOutlinedIcon/>
                    </IconButton>
                    <IconButton color='inherit'>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Esha Goel</span>
                    <span className="chat__timestamp">20:40</span>
                    Hey Guys
                </p>
                <p className="chat__message">
                    <span className="chat__name">Esha Goel</span>
                    <span className="chat__timestamp">20:40</span>
                    Hey Guys
                </p>

            </div>

            <div className="chat__footer">

            </div>
        </div>
    )
}


export default Chat
