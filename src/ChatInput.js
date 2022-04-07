function ChatInput() {
    return (
        <div className="input-group mb-3 send-sec">
            <input type="text"  className="send-input" placeholder="massage"/>
            <button className="btn btn-success right-align" type="button" >
                <img src={require("./send.png")} alt="send" height="20px"/>
            </button>
        </div>
    )
}

export default ChatInput;