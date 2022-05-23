import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {useRef, useState} from "react";


async function ChatPage({user}) {
    const [contact, setContact] = useState(null);
    const [listMessages, setListMessage] = useState([]);

    return (
        <div className="chat-page-background">
            {/*<RightSec contact={contact} listMessages={listMessages} setListMessage={setListMessage}*/}
            {/*          user={user}/>*/}
            <LeftMenu user={user} setContact={setContact} setListMessage={setListMessage} prevContact={contact}
                      listMessage={listMessages}/>
        </div>
    )
}

export default ChatPage;