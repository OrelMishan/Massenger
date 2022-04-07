function ChatInput() {
    return (
        <div className="input-group mb-3 send-sec send-input">
            <input type="text" className="form-control" placeholder="massage"
                   aria-label="Recipient's username" aria-describedby="button-addon2"/>
            <button className="btn btn-success left-align " type="button">
                <img src={require("./send.png")} alt="send" height="20px"/>
            </button>
        </div>
    )
}

export default ChatInput;