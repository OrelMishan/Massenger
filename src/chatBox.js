import Message from "./message";

function ChatBox({messagesList}) {
    let dataList = "";
    if (messagesList) {
        dataList = messagesList.map((message) => {
                return <Message sender={message.sender} type={message.type} value={message.value}/>;
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