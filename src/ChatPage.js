import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {useState} from "react";


function ChatPage({user}) {
    const [contact, setContact] = useState(null);
    const [listMessages, setListMessage] = useState(null);
    return (
        <div className="chat-page-background">
            <RightSec contact={contact} listMessages={listMessages} setListMessage={setListMessage}
                      username={user.username}/>
            <LeftMenu user={user} setContact={setContact} setListMessage={setListMessage} prevContact={contact}
                      listMessage={listMessages}/>
        </div>
    )
}

export default ChatPage;