import 'bootstrap-icons/font/bootstrap-icons.css';

function ChatInput() {
    return (
        <div className="send-sec">
            <input type="text"  className="send-input" placeholder="massage"/>
            <button className="btn btn-success send-bottom" type="button" >
                <i className="bi bi-send"/>
            </button>
        </div>
    )
}

export default ChatInput;