import AddNewContact from "./AddNewContact";
import {useEffect, useState} from "react";

function UpperLeft({user, setContactList}) {
    let [userData, setUserData] = useState([])

    async function fetchData() {
        let ser = await fetch('http://localhost:5108/api/contacts/user/' + user, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        ser = await ser.json();
        setUserData(ser);
        setContactList(ser[0].contacts);
    }

    useEffect(() => {
        fetchData();
    }, []);
    const [openModel, setOpenModel] = useState(false);
    return (
        <div className="upper-left">
            {userData.map((value, key) => {
                return <div className="sticky-sm-top big-text">
                    <img src={value.photo} className="rounded-circle my-photo" alt="not found image"/>
                    {value.name}
                    <button className="new-contact" onClick={() => {
                        setOpenModel(true);
                    }}>
                        <i className="bi bi-person-plus-fill"/>
                    </button>
                </div>
            })}
            {openModel &&
                <AddNewContact closeModel={setOpenModel} setContactList={setContactList} user={user}/>}
        </div>

    );
}

export default UpperLeft