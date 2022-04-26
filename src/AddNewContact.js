import {useRef} from "react";
import registeredUsers from "./Users";

function AddNewContact({closeModel, setContactList, username}) {
    const fileInput = useRef(null)
    const textInput = useRef(null);
    const addContact = () => {
        if (username === textInput.current.value) {
            textInput.current.value = "";
            alert("Username does not valid, please try again");
            return;
        }
        let index = registeredUsers.findIndex((i) => (i.username === textInput.current.value));
        if (index >= 0) {
            let newContact = {
                contactName: textInput.current.value,
                photo: registeredUsers[index].photo,
                lastMessageTime: "",
                lastMessage: {sender: "client", type: "text", value: ""},
                messages: []
            }
            index = registeredUsers.findIndex((i) => (i.username === username));
            if (registeredUsers[index].data.findIndex((i) => (i.contactName === textInput.current.value)) >= 0) {
                textInput.current.value = "";
                alert("Username already exist, please try again");
                return;
            }
            setContactList(contactList => [...contactList, newContact]);
            registeredUsers[index].data.push(newContact);
            closeModel(false)
        } else {
            alert("Username does not exist, please try again")
        }

    }

    // const addPhoto = (event) => {
    //     event.preventDefault();
    //     urlPhoto = URL.createObjectURL(event.target.files[0]);
    // }

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
                        {/*<input type="file" accept="image/*" hidden={true} ref={fileInput} onChange={addPhoto}/>*/}
                        {/*<button className="btn btn-primary" id="transparent-btn"*/}
                        {/*        onClick={() => {*/}
                        {/*            fileInput.current.click();*/}
                        {/*        }}>*/}
                        {/*    <i className="bi bi-paperclip"/>*/}
                        {/*</button>*/}
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