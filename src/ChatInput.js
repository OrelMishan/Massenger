import 'bootstrap-icons/font/bootstrap-icons.css';
import {useRef, useState} from "react";
import RecordModal from "./RecordModal";

function isLegalFile(fileType) {
    let parts = fileType.split('/');
    return parts[parts.length - 2] === "video" || parts[parts.length - 2] === "image";
}

function isVideo(fileName) {
    let parts = fileName.split('/');
    return parts[parts.length - 2] === "video";
}


// function updateContact(contact, newMessage, username) {
//     let index = registeredUsers.findIndex((i) => (i.username === username));
//     let contactIndex = registeredUsers[index].data.findIndex((i) => (i.contactName === contact.contactName));
//     registeredUsers[index].data[contactIndex].lastMessageTime = new Date().toLocaleString();
//     registeredUsers[index].data[contactIndex].lastMessage = newMessage;
// }


function ChatInput({contact, setListMessages, username}) {
    const fileInput = useRef(null)
    const textInput = useRef(null)
    const [openModel, setOpenModel] = useState(false);

    async function sendToServer(add) {
        const params = {
            content: add
        };
        await fetch("http://localhost:5108/api/contacts/" + contact.id + "/messages?username=" + username, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        });
        await fetch("http://" + contact.server + "/api/transfer", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: username,
                to: contact.id,
                content: add
            })
        })
        let data = await fetch("http://localhost:5108/api/contacts/" + contact.id + "/messages?username=" + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json();
        setListMessages(data);
    }

    const sendText = (event) => {
        event.preventDefault();
        if (contact.length === 0 || textInput.current.value.length === 0) {
            return;
        }
        //let newItem = {sender: true, type: "text", value: textInput.current.value};
        sendToServer(textInput.current.value);
        textInput.current.value = "";
        //       setListMessages(listMessages => [...listMessages, newItem]);
//        updateContact(contact, newItem, username);
    }

    const sendfile = (event) => {
        event.preventDefault();
        if (!isLegalFile(event.target.files[0].type)) {
            return;
        }
        let newItem = {sender: "client", type: "image", value: URL.createObjectURL(event.target.files[0])};
        if (isVideo(event.target.files[0].type)) {
            newItem.type = "video";
            let src = URL.createObjectURL(event.target.files[0]);
            newItem.value = src;
        }
        setListMessages(listMessages => [...listMessages, newItem]);
        fileInput.current.value = null;
        //       updateContact(contact, newItem, username);
    }

    return (
        <div className="send-sec">
            <button className="btn btn-success record-bottom" type="button" id="transparent-btn"
                // onClick={() => {
                //     if (contact.length === 0) {
                //         return;
                //     }
                //     setOpenModel(true) }}
            >
                <i className="bi bi-mic-fill"/>
            </button>
            {openModel &&
                <RecordModal closeModel={setOpenModel} contact={contact} setListMessages={setListMessages}
                             username={username}/>}
            <input type="file" accept="video/* image/*" ref={fileInput} onChange={sendfile}/>
            <button className="btn btn-success file-bottom" id="transparent-btn"
                // onClick={() => {
                //     if (contact.length === 0) {
                //         return;
                //     }
                //     fileInput.current.click();
                // }}
            >
                <i className="bi bi-paperclip"/>
            </button>
            <input type="text" className="send-input" placeholder="massage" ref={textInput}/>
            <button className="btn btn-success send-bottom" id="transparent-btn" type="button" onClick={sendText}>
                <i className="bi bi-send"/>
            </button>

        </div>)
}

export default ChatInput;