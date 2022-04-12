import Massege from "./massege";

function ChatBox() {

    return (
        <div className="chat-box scrollbar container">

            <Massege sender="client" type="text"
                     value="blalalalhhhhhhhhhhhhalal ssssssssssssssssssssssssss ssssssssssssssssssssssssssssssssssss"/>
            <Massege sender="server" type="text"
                     value="blalalaeeeggggggggggggggggggggggggffffffffffffffffffffffff eeeeeeeeeeeeeeeeeeeelalal"/>
            <Massege sender="server" type="image"
                     value="send.png"/>
        </div>
    )
}

export default ChatBox;