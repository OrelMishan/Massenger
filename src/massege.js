function Massege({sender, type, value}) {
    let offset = ""
    if (type === "text") {
        if (sender==="server"){
            offset="offset-6"
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
    if (type === "image") {
        if (sender==="server"){
            offset="offset-8"
        }
        return (
            <div className="row message">
                <div className={`col-4 ${offset}`}>
                    <div className="text-break"  id="message-border">
                        <img className="message-image" src={require("./"+value)} alt="not found"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Massege;