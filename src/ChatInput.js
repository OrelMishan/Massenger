import 'bootstrap-icons/font/bootstrap-icons.css';

function ChatInput() {
    return (<div className="send-sec">
        <button className="btn btn-success record-bottom" type="button">
            <i className="bi bi-mic-fill"/>
        </button>
        <button  className="btn btn-success file-bottom" type="button">
            <i className="bi bi-paperclip"/>
        </button>
        <input type="text" className="send-input" placeholder="massage"/>
        <button className="btn btn-success send-bottom" type="button">
            <i className="bi bi-send"/>
        </button>
    </div>)
}

export default ChatInput;