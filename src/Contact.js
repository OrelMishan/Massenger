import Message from "./message";

function Contact({contact, setContact, setListMessage}) {
    const lastMessage = (message) => {
        if(message.type === "image") {
            return  <img src={message.value} className="last-message-image" alt="not found"/>
        }else if(message.type === "video"){

        }
        else if(message.type === "record"){

        } else if(message.type === "text"){
            return <p className="mb-1 message-peak-text">{message.value}</p>        }
    }

    return (
        <a className="list-group-item" id="transparent-bubble" onClick={()=> {
            setContact(contact);
            setListMessage(contact.messages);
        }}>
            <div className="d-flex justify-content-between">
                <img className="rounded-circle contact-pic"
                     src={"face.jpg"}/>


            </div>
            <h5 className="mb-1 big-text user-name">{contact.contactName}</h5>
            <small className="text-muted date-text">"14/4/2022"</small>
            {lastMessage(contact.messages[contact.messages.length-1])}
            {/*<p className="mb-1 message-peak-text">{contact.messages[contact.messages.length-1].value}</p>*/}
        </a>
    )
}

export default Contact