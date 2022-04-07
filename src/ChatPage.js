import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {Container} from "react-bootstrap";
import ChatBox from "./chatBox";

function ChatPage() {
    return(
        <div className="container-fluid">
            <LeftMenu/>
            <RightSec/>
        </div>
    )
}
export default ChatPage;