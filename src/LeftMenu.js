import LowerLeft from "./LowerLeft";
import UpperLeft from "./UpperLeft";

function LeftMenu({user, setContact, setListMessages, prevContact, listMessages, contactList, setContactList}) {


    return (
        <div className="left-menu-limits">
            <div className="left-menu">
                <UpperLeft user={user} setContactList={setContactList} />
                <LowerLeft user={user} contactList={contactList} setContact={setContact} setListMessages={setListMessages}
                           prevContact={prevContact} listMessages={listMessages}/>
            </div>
        </div>

    )
}

export default LeftMenu







