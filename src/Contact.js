function Contact({contact, setContact}) {

    return (
        <a className="list-group-item" id="transparent-bubble" onClick={()=>setContact(contact)}>
            <div className="d-flex justify-content-between">
                <img className="rounded-circle contact-pic"
                     src={"face.jpg"}/>
                <h5 className="mb-1 big-text text-center">{contact.contactName}</h5>
                <small className="text-muted date-text">"14/4/2022"</small>
            </div>
            <p className="mb-1 message-peak-text">{contact.messages[contact.messages.length-1].value}</p>
        </a>
    )
}

export default Contact