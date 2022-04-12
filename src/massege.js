function Massege({sender, type, value}) {
    var offset = ""
    if (sender==="server"){
        offset="offset-6"
    }
    if (type === "text") {
        return (
            <div className="row message">
                <div className={`col-6 ${offset}`}>
                    <div className="text-break border border-5 border-warning">
                        {value}
                    </div>
                </div>
            </div>
        )
    }
    if (type === "image") {
        return (
            <div className="row message">
                <div className={`col-6 ${offset}`}>
                    <div className="text-break border border-5 border-warning">
                        <img className="message-image" src={require("./"+value)} alt="not found"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Massege;