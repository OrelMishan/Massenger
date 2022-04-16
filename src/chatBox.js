import Message from "./message";
import {useRef} from "react";


function ChatBox({listMessages}) {
    let window = useRef(null);
    let dataList = "";
    if (listMessages.length !== 0) {
        // eslint-disable-next-line array-callback-return
        dataList = listMessages.map((message, key) => {
                if (message.value !== "")
                    return <Message sender={message.sender} type={message.type} value={message.value} key={key}/>;
            }
        )
    }

    const scrollToBottom = (event) => {
        window.current.scrollTop=window.current.scrollHeight;
    }

    return (
        <div className="chat-box scrollbar" onLoad={scrollToBottom} ref={window}>
            {dataList}
        </div>
    )
}

export default ChatBox;