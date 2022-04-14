import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {useState} from "react";


function ChatPage({user}) {
    const [contact,setContact]=useState([]);
    const [listMessages,setListMessage]=useState([]);
    return(
        <div className="chat-page-background">
            <RightSec contact={contact} listMessages={listMessages} setListMessage={setListMessage} username={user.username}/>
            <LeftMenu user={user} setContact={setContact} setListMessage={setListMessage}/>
        </div>
    )
}
export default ChatPage;