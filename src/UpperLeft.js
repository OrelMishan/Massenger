import AddNewContact from "./AddNewContact";
import {useState} from "react";

function UpperLeft({user, setContactList}) {
    const [openModel, setOpenModel] = useState(false);
    return (
        <div className="upper-left">
            <div className="sticky-sm-top big-text">
                <img src={user.photo} className="rounded-circle my-photo" alt="not found image"/>
                {user.nickname}
                <button className="new-contact" onClick={() => {
                    setOpenModel(true);
                }}>
                    <i className="bi bi-person-plus-fill"/>
                </button>
            </div>
            {openModel &&
                <AddNewContact closeModel={setOpenModel} setContactList={setContactList} username={user.username}/>}
        </div>

    );
}

export default UpperLeft