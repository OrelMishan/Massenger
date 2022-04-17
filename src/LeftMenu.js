import LowerLeft from "./LowerLeft";
import UpperLeft from "./UpperLeft";

function LeftMenu({user,setContact,setListMessage,prevContact, listMessage}) {
    return (
        <div className="left-menu-limits">
            <div className="left-menu">
                <UpperLeft nickname={user.nickname} photo={user.photo}/>
                <LowerLeft user={user} setContact={setContact} setListMessage={setListMessage} prevContact={prevContact} listMessage={listMessage}/>
            </div>
        </div>

    )
}

export default LeftMenu







