import AddNewContact from "./AddNewContact";
import {useState} from "react";

function UpperLeft() {
    const [openModel, setOpenModel] = useState(false);
    return (
        <div className="upper-left">
            <div className="sticky-sm-top big-text">
                <img src={require("./face.jpg")} className="rounded-circle my-photo" alt="not found image"/>
                David Monheit
                <button className="new-contact" onClick={()=>{setOpenModel(true);}}><i className="bi bi-person-plus-fill"></i></button>
            </div>
            {openModel && <AddNewContact closeModel = {setOpenModel}/>}
        </div>

    );
}
export default UpperLeft