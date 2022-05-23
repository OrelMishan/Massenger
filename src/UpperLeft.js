import AddNewContact from "./AddNewContact";
import {useState} from "react";

async function UpperLeft({user, setContactList}) {
    let userData = await fetch('http://localhost:5108/api/Contacts/user?username='+user,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    userData = await userData.json();
    const [openModel, setOpenModel] = useState(false);
    return (
        <div className="upper-left">
            <div className="sticky-sm-top big-text">
                <img src={userData.photo} className="rounded-circle my-photo" alt="not found image"/>
                {userData.name}
                <button className="new-contact" onClick={() => {
                    setOpenModel(true);
                }}>
                    <i className="bi bi-person-plus-fill"/>
                </button>
            </div>
            {openModel &&
                <AddNewContact closeModel={setOpenModel} setContactList={setContactList} user={user}/>}
        </div>

    );
}

export default UpperLeft