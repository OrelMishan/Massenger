import LowerLeft from "./LowerLeft";
import UpperLeft from "./UpperLeft";
import {useRef, useState} from "react";

async function LeftMenu({user, setContact, setListMessage, prevContact, listMessage}) {
    const [contactList, setContactList] = useState([]);
    useRef(() => {
        async function fetchUser() {
            const userData = await fetch('http://localhost:5108/api/Contacts/user/' + user, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await userData.json();
            setContactList(json.contacts);
        }
        fetchUser();
    },[])
    return (
        <div className="left-menu-limits">
            <div className="left-menu">
                <UpperLeft user={user} setContactList={setContactList}/>
                <LowerLeft user={user} contactList={contactList} setContact={setContact} setListMessage={setListMessage}
                           prevContact={prevContact} listMessage={listMessage}/>
            </div>
        </div>

    )
}

export default LeftMenu







