import 'bootstrap-icons/font/bootstrap-icons.css';
import {useRef} from "react";

function ChatInput() {
    const fileInput = useRef(null)

    return (<div className="send-sec">
        <button className="btn btn-success record-bottom" type="button">
            <i className="bi bi-mic-fill"/>
        </button>
        <input type="file" accept="video/* image/*" ref={fileInput}/>
        <button className="btn btn-success file-bottom" onClick={() => fileInput.current.click()}>
            <i className="bi bi-paperclip"/>
        </button>
        <input type="text" className="send-input" placeholder="massage"/>
        <button className="btn btn-success send-bottom" type="button">
            <i className="bi bi-send"/>
        </button>
    </div>)
}

export default ChatInput;