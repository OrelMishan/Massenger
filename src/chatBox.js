import Message from "./message";

function ChatBox({listMessages}) {
    let dataList = "";
    if (listMessages.length !== 0) {
        dataList = listMessages.map((message, key) => {
                if (message.value !== "")
                    return <Message sender={message.sender} type={message.type} value={message.value} key={key}/>;
            }
        )
    }

    return (
        <div className="chat-box scrollbar">
            {dataList}
        </div>
    )
}

export default ChatBox;