import LowerLeft from "./LowerLeft";
import UpperLeft from "./UpperLeft";

function LeftMenu({user,setContact}) {
    return (
        <div className="left-menu-limits">
            <div className="left-menu">
                <UpperLeft nickname={user.nickname} photo={user.photo}/>
                <LowerLeft data={user.data} setContact={setContact}/>
            </div>
        </div>

    )
}

export default LeftMenu







