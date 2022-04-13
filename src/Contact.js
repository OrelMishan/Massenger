function Contact({name, lastMessage, date} ) {

    return (
        <div>
            <a className="list-group-item" id = "transparent-bubble">
                <div className="d-flex justify-content-between"><a href="#">
                    <img className="rounded-circle contact-pic"
                         src={require("./face.jpg")}></img>
                </a>
                    <h5 className="mb-1 big-text">{name}</h5>
                    <small className="text-muted date-text">{date}</small>
                </div>
                <p className="mb-1 message-peak-text">{lastMessage}</p>
            </a>



        </div>
    )
}
export default Contact