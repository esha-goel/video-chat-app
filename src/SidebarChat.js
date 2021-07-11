import { useState,useEffect } from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";
import { Link } from 'react-router-dom';
import db from './firebase';
import { Prompt } from 'react-st-modal';


const SidebarChat = ({id,name,addNewChat}) => {

    const [seed,setSeed] = useState('');

    const [messages, setMessages] = useState("");
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        setSeed(id);
    },[id]);


    return !addNewChat?(
        <Link to = {`/rooms/${id}`}>
            <div className="sidebarChat">
                {/* generates random avatars */}
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message.substring(0,20)}</p>
                </div>
            </div>
        </Link>
    ):(
        <div  className="sidebarChat">
            <div
                onClick={async () => {
                const roomName = await Prompt('Enter Room Name', {
                    isRequired: true,
                });
    
                if (roomName) {
                    db.collection("rooms").add({
                        name:roomName
                    });
                }
                }}
            >
                <h2>Add New Room</h2>
            </div>
        </div>

    )
}

export default SidebarChat
