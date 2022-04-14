import ChatNav from "./ChatNav";
import ChatInput from "./ChatInput";
import ChatBox from "./chatBox";
import {useState} from "react";

function RightSec({contact}) {

    const [messagesList, setMessagesList] = useState([]);

    let nav = <ChatNav name=""/>;
    let chat = <ChatBox masseges={null}/>
    let input = <ChatInput messages={null}/>
    if (contact) {
        nav = <ChatNav name={contact.contactName}/>;
        chat = <ChatBox messagesList={messagesList}/>
        input = <ChatInput contact={contact} setMessagesList={setMessagesList}/>
    }


    return (
        <div className="chat-sec">
            {nav}
            {chat}
            {input}
        </div>
    )
}

export default RightSec;