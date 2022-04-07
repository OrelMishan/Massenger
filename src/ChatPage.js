import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {Container} from "react-bootstrap";

function ChatPage() {
    return(
        <div className="container-lg">
        <div>
            <LeftMenu/>
            <RightSec/>
        </div>
        </div>
    )
}
export default ChatPage;