import AddNewContact from "./AddNewContact";
import {useState} from "react";

function UpperLeft({nickname, photo}) {
    const [openModel, setOpenModel] = useState(false);
    return (
        <div className="upper-left">
            <div className="sticky-sm-top big-text">
                <img src={photo} className="rounded-circle my-photo" alt="not found image"/>
                {nickname}
                <button className="new-contact" onClick={() => {
                    setOpenModel(true);
                }}>
                    <i className="bi bi-person-plus-fill"/>
                </button>
            </div>
            {openModel && <AddNewContact closeModel={setOpenModel}/>}
        </div>

    );
}

export default UpperLeft