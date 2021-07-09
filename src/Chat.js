import { useState,useEffect, useRef } from 'react';
import { Avatar, IconButton } from '@material-ui/core';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import VideoCallOutlinedIcon from '@material-ui/icons/VideoCallOutlined';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Link, useParams } from 'react-router-dom';
import './Chat.css';
import db from './firebase';
import firebase from 'firebase';
import {useStateValue} from "./StateProvider";


const Chat = () => {
    const [input,setInput] = useState('');
    const [seed,setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName,setRoomName] = useState('');
    const [messages,setMessages] = useState([]);
    const [{user}] =  useStateValue();
    const [URL] = useState("https://ancient-savannah-98688.herokuapp.com/");

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
    
    useEffect(scrollToBottom, [messages]);

    useEffect(() => {
        if(roomId){
            db.collection("rooms").doc(roomId).onSnapshot(snapshot => setRoomName(snapshot.data().name))
            
            db.collection("rooms").doc(roomId).collection("messages").orderBy('timestamp','asc').onSnapshot( snapshot => {
                setMessages(snapshot.docs.map( doc => (
                    doc.data()
                )))
            });
        }
    }, [roomId]); 
    // Everytime roomId changes it runs this

    useEffect(() => {
        // setSeed(Math.floor(Math.random() * 5000));
        setSeed(roomId);
    },[roomId]);


    const sendMessage = (e) => {
        e.preventDefault();

        db.collection("rooms").doc(roomId).collection("messages").add({
            message:input,
            name:user.displayName, //from google Auth for sender
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            isLink:false
        });

        setInput('');
    }

    const startVideoCall = () => {
        // setInput(`Join the Video Call <a>${URL}${roomId}</a>`);
        db.collection("rooms").doc(roomId).collection("messages").add({
            message:`Join the Video Call ${URL}${roomId}`,
            name:user.displayName, //from google Auth for sender
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            isLink:true
        });
        // setInput('');
        window.open(`${URL}${roomId}`, "_blank")
    }

    return (
        <div className="chat">
            
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                </div>

                <div className="chat__headerRight">
                    <IconButton color='inherit'>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton color='inherit' onClick={startVideoCall}>
                        <VideoCallOutlinedIcon/>
                    </IconButton>
                    <IconButton color='inherit'>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map( message => (
                    <div className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                        <div className="chat__messageInfo">
                            <span className="chat__name">{message.name}</span>
                            <span className="chat__timestamp">{new Date(message.timestamp?.toDate()).toUTCString()}</span>
                        </div>

                        {message.isLink && <Link to={{ pathname: `${URL}${roomId}` }} target="_blank" >
                            <p>{message.message}</p>
                        </Link>}

                        {!message.isLink && <p>{message.message}</p>}
                    </div>
                ))}
                {/* true in condition will be a condition from database */}
                <div ref={messagesEndRef} />
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
                    <IconButton color = "inherit" onClick={sendMessage}>
                        <SendIcon />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}


export default Chat
