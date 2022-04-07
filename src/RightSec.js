import ChatNav from "./ChatNav";
import ChatInput from "./ChatInput";
import ChatBox from "./chatBox";

function RightSec() {
    return (
        <div className="chat-sec">
            <ChatNav/>
            <ChatBox/>
            <ChatInput/>

        </div>
    )
}

export default RightSec;