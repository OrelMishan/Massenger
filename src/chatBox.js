import Message from "./message";
import {useRef} from "react";


function ChatBox({listMessages}) {
    let window = useRef(null);
    let dataList = "";
    if (listMessages) {
        // eslint-disable-next-line array-callback-return
        dataList = listMessages.map((message, key) => {
                if (message.value !== "")
                    return <Message sender={message.sent} type={"text"} value={message.content}/>;
            }
        )
        dataList.reverse();
    }

    return (
        <div className="chat-box scrollbar" ref={window}>
            {dataList}
        </div>
    )
}

export default ChatBox;