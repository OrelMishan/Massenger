import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {useState} from "react";


function ChatPage({user}) {
    const [contact,setContact]=useState([])
    return(
        <div className="chat-page-background">
            <RightSec contact={contact}/>
            <LeftMenu user={user} setContact={setContact}/>
        </div>
    )
}
export default ChatPage;