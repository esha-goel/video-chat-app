import { useState,useEffect } from 'react';
import './SidebarChat.css';
import {Avatar} from "@material-ui/core";
import { Link } from 'react-router-dom';
import db from './firebase';


const SidebarChat = ({id,name,addNewChat}) => {

    const [seed,setSeed] = useState('');

    const [messages, setMessages] = useState("");
    // const [roomName,setRoomName] = useState('');
    
    useEffect(() => {
        if(id){
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp','desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            })
        }
    }, [id]);

    useEffect(() => {
        // setSeed(Math.floor(Math.random() * 5000));
        setSeed(id);
    },[id]);

    // const addRoom = (e) => {
    //     e.preventDefault();
    //     if(roomName)
    //     {
    //         // do database thing
    //         db.collection("rooms").add({
    //             name:roomName
    //         });
    //     }
    //     // document.getElementsByClassName('sidebarChat')[0].innerHTML = '<div onClick=createChat><h2>Add new Chat</h2></div>'
    //     setRoomName('');
    // }

    const createChat = () => {
        // document.getElementsByClassName('sidebarChat')[0].innerHTML = '<form><input id="add__input" placeholder="Enter room name" type="text" /><button id="add__room" type="submit" >Add</button></form>'

        // document.getElementById('add__input').value = roomName;
        // document.getElementById('add__input').onchange = e => setRoomName(e.target.value);
        // document.getElementById('add__room').onClick = addRoom;
        const roomName = prompt('Enter room name');

        if(roomName)
        {
            // do database thing
            db.collection("rooms").add({
                name:roomName
            });
        }
    }

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
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>

    )
}

export default SidebarChat
