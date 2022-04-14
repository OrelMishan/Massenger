import 'bootstrap-icons/font/bootstrap-icons.css';
import {useRef, useState} from "react";

function isVideo(fileName) {
    let parts = fileName.split('.');
    let ext = parts[parts.length - 1];
    switch (ext.toLowerCase()) {
        case 'm4v':
        case 'avi':
        case 'mpg':
        case 'mp4':
            return true;
        default:
            return false;
    }
}

function ChatInput({contact,setMessagesList}) {
    const fileInput = useRef(null)
    const [file, setFile] = useState("");
    const recordInput = useRef(null)
    const textInput = useRef(null)

    const sendText = (event) => {
        event.preventDefault()
        let newList=contact.messages;
        console.log(newList);
        newList.push({sender: "client", type: "text", value: textInput.current.value})
        setMessagesList(newList);
        alert(textInput.current.value)
    }

    const sendfile = (event) => {
        event.preventDefault();
        setFile(URL.createObjectURL(event.target.files[0]));
        let newMessage = {sender: "client", type: "image", value: file};
        if (isVideo(file)) {
            newMessage.type = "video";
        }
        setMessagesList(newMessage);
        setFile("");
    }

    return (
        <div className="send-sec">
            <button className="btn btn-success record-bottom" type="button" id="transparent-btn" ref={recordInput}>
                <i className="bi bi-mic-fill"/>
            </button>
            <input type="file" accept="video/* image/*" ref={fileInput} onChange={sendfile}/>
            <button className="btn btn-success file-bottom" id="transparent-btn"
                    onClick={() => fileInput.current.click()}>
                <i className="bi bi-paperclip"/>
            </button>
            <input type="text" className="send-input" placeholder="massage" ref={textInput}/>
            <button className="btn btn-success send-bottom" id="transparent-btn" type="button" onClick={sendText}>
                <i className="bi bi-send"/>
            </button>
        </div>)
}

export default ChatInput;