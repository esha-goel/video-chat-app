import { useState,useEffect } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import './Chat.css';

const Chat = () => {
    const [input,setInput] = useState('');
    const [seed,setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    },[]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('');
    }

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
                <div className="chat__message">
                    <div className="chat__messageInfo">
                        <span className="chat__name">Esha Goellllll</span>
                        <span className="chat__timestamp">20:40</span>
                    </div>
                    <p>Hey Guys</p>
                </div>
                {/* true in condition will be a condition from database */}
                <div className={`chat__message ${true && 'chat__receiver'}`}>
                    <div className="chat__messageInfo">
                        <span className="chat__name">Esha Goel</span>
                        <span className="chat__timestamp">20:40</span>
                    </div>
                    <p>Hey Guys</p>
                </div>

            </div>

            <div className="chat__footer">
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type your message"type="text" />
                    <button onClick={sendMessage} type="submit" >Send</button>
                </form>
                <div className="chat__footerIcons">
                    <div className="chat__footerExtra">
                        <IconButton color = "inherit">
                            <InsertEmoticonIcon />
                        </IconButton>
                        <IconButton color = "inherit">
                            <MicIcon />
                        </IconButton>
                    </div>
                    <IconButton color = "inherit">
                        <SendIcon onClick={sendMessage}/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}


export default Chat
