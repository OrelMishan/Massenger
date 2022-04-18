import LowerLeft from "./LowerLeft";
import UpperLeft from "./UpperLeft";
import {useState} from "react";

function LeftMenu({user,setContact,setListMessage,prevContact, listMessage}) {
    const [contactList,setContactList] = useState(user.data)
    return (
        <div className="left-menu-limits">
            <div className="left-menu">
                <UpperLeft user={user} setContactList={setContactList}/>
                <LowerLeft user={user} contactList={contactList} setContact={setContact} setListMessage={setListMessage} prevContact={prevContact} listMessage={listMessage}/>
            </div>
        </div>

    )
}

export default LeftMenu







