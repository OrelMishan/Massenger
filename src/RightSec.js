import ChatNav from "./ChatNav";
import ChatInput from "./ChatInput";
import ChatBox from "./chatBox";

function RightSec({contact, listMessages, setListMessages, username}) {
    let nav = <ChatNav name="" image={""}/>;
    let chat = <ChatBox masseges={null}/>
    let input = <ChatInput contact={null}/>
    if (contact) {
        nav = <ChatNav name={contact.name} image={""}/>;
        chat = <ChatBox listMessages={listMessages}/>
        input =
            <ChatInput contact={contact} setListMessages={setListMessages} username={username} />
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