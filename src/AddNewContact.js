import {useRef} from "react";
import registeredUsers from "./Users";

function AddNewContact({closeModel, setContactList, username}) {
    const fileInput = useRef(null)
    const textInput = useRef(null);
    const addContact = () => {
        let newContact = {contactName: textInput.current.value, lastMessageTime: "", messages: []}
        setContactList(contactList => [...contactList, newContact]);
        let index = registeredUsers.findIndex((i) => (i.username === username));
        registeredUsers[index].data.push(newContact);
        closeModel(false)
    }
    return (
        <div className="modelContainer">
            <div id="" className="shadow-lg p-3 mb-5 rounded modelBackground">
                <line>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                        closeModel(false)
                    }}/>
                    <div>
                        <div className="big-text">Add New Contact</div>
                    </div>
                </line>

                <div className="input-group">
                    <div>
                        <input type="file" accept="image/*" hidden={true} ref={fileInput}/>
                        <button className="btn btn-primary" id="transparent-btn"
                                onClick={() => {
                                    fileInput.current.click();
                                }}>
                            <i className="bi bi-paperclip"/>
                        </button>
                    </div>
                    <input type="text" className="form-control rounded" placeholder="Contact's Username"
                           ref={textInput}/>
                    <button className="btn btn-primary big-text" type="submit" onClick={addContact}>Add
                    </button>
                </div>

            </div>

        </div>

    )
}

export default AddNewContact;