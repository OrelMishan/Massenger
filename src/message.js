function Message({sender, type, value}) {
    let offset = ""
    if (type === "text") {
        if (!sender) {
            offset = "offset-6"
        }
        return (
            <div className="row message">
                <div className={`col-6 ${offset}`}>
                    <div className="text-break" id="message-border">
                        {value}
                    </div>
                </div>
            </div>
        )
    }
    if (type === "record") {
        if (sender === "false") {
            offset = "offset-7"
        }
        return (
            <div className="row message">
                <div className={`col-6 ${offset}`}>
                    <audio src={value} controls/>
                </div>
            </div>
        )
    }
    if (type === "image") {
        if (sender === "false") {
            offset = "offset-10"
        }
        return (
            <div className="row message">
                <div className={`col-2 ${offset}`}>
                    <div className="text-break" id="message-border">
                        <img src={value} className="message-image" alt="not found"/>
                    </div>
                </div>
            </div>
        )
    }
    if (type === "video") {
        if (sender === "false") {
            offset = "offset-8"
        }
        return (
            <div className="row message">
                <div className={`col-4 ${offset}`}>
                    <video controls id="message-border">
                        <source src={value}/>
                    </video>
                </div>
            </div>
        )
    }
}

export default Message;