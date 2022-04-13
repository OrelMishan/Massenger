import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";


function ChatPage(username,data) {
    return(
        <div className="chat-page-background">
            <RightSec/>
            <LeftMenu username={username} data={data}/>
        </div>
    )
}
export default ChatPage;