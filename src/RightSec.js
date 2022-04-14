import ChatNav from "./ChatNav";
import ChatInput from "./ChatInput";
import ChatBox from "./chatBox";

function RightSec({contact, listMessages, setListMessage,username}) {


    let nav = <ChatNav name=""/>;
    let chat = <ChatBox masseges={null}/>
    let input = <ChatInput messages={null}/>
    if (contact) {
        nav = <ChatNav name={contact.contactName}/>;
        chat = <ChatBox listMessages={listMessages}/>
        input = <ChatInput contact={contact} setListMessages={setListMessage} username={username}/>
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