function Contact({contact, setContact, setListMessages, username}) {
    const lastMessage = (message) => {
        // if (message.type === "image") {
        //     return <img src={message.value} className="last-message-image" alt="not found"/>
        // } else if (message.type === "video") {
        //     return <i className="bi bi-person-video3 last-message-image"/>
        // } else if (message.type === "record") {
        //     return <i className="bi bi-mic-fill last-message-image"/>
        // } else if (message.type === "text") {
        return <p className="mb-1 message-peak-text">{message}</p>
        //}
    }
    async function setMessages() {
        let data = await fetch("http://localhost:5108/api/contacts/" + contact.id + "/messages?username=" + username, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        data = await data.json();
        setContact(contact);
        setListMessages(data);
    }

    return (
        <a className="list-group-item" id="transparent-bubble" onClick={setMessages}>
            <div className="d-flex justify-content-between">
                <img className="rounded-circle contact-pic"
                     src="" alt="no picture"/>
            </div>
            <h5 className="mb-1 big-text user-name">{contact.name}</h5>
            <small className="text-muted date-text">{contact.lastdate}</small>
            {lastMessage(contact.last)}
            {/*<p className="mb-1 message-peak-text">{contact.messages[contact.messages.length-1].value}</p>*/}
        </a>
    )
}

export default Contact