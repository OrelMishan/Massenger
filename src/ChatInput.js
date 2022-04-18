import 'bootstrap-icons/font/bootstrap-icons.css';
import {useRef, useState} from "react";
import registeredUsers from "./Users";

function isLegalFile(fileType){
    let parts = fileType.split('/');
    return parts[parts.length - 2] === "video" || parts[parts.length - 2] === "image";
}
function isVideo(fileName) {
    let parts = fileName.split('/');
    return parts[parts.length - 2] === "video";
}


function saveMessage(contact, newMessage, username) {
    let index = registeredUsers.findIndex((i) => (i.username === username));
    let contactIndex = registeredUsers[index].data.findIndex((i) => (i.contactName === contact.contactName));
    registeredUsers[index].data[contactIndex].messages.push(newMessage);
    registeredUsers[index].data[contactIndex].lastMessageTime = new Date().toLocaleString();
}

function ChatInput({contact, setListMessages, username}) {
    const fileInput = useRef(null)
    const recordInput = useRef(null)
    const textInput = useRef(null)

    const sendText = (event) => {
        event.preventDefault();
        if (contact.length === 0 || textInput.current.value.length === 0) {
            return;
        }
        let newItem = {sender: "client", type: "text", value: textInput.current.value};
        textInput.current.value = "";
        setListMessages(listMessages => [...listMessages, newItem]);
    }

    const sendfile = (event) => {
        event.preventDefault();
        if (!isLegalFile(event.target.files[0].type)){
            return;
        }
        let newItem = {sender: "client", type: "image", value: URL.createObjectURL(event.target.files[0])};
        if (isVideo(event.target.files[0].type)) {
            newItem.type = "video";
            let src = URL.createObjectURL(event.target.files[0]);
            newItem.value = src;
        }
        setListMessages(listMessages => [...listMessages, newItem]);
        fileInput.current.value=null;
    }

    return (
        <div className="send-sec">
            <button className="btn btn-success record-bottom" type="button" id="transparent-btn" ref={recordInput}>
                <i className="bi bi-mic-fill"/>
            </button>
            <input type="file" accept="video/* image/*" ref={fileInput} onChange={sendfile}/>
            <button className="btn btn-success file-bottom" id="transparent-btn"
                    onClick={() => {
                        if (contact.length === 0) {
                            return;
                        }
                        fileInput.current.click();
                    }}>
                <i className="bi bi-paperclip"/>
            </button>
            <input type="text" className="send-input" placeholder="massage" ref={textInput}/>
            <button className="btn btn-success send-bottom" id="transparent-btn" type="button" onClick={sendText}>
                <i className="bi bi-send"/>
            </button>

        </div>)
}

export default ChatInput;