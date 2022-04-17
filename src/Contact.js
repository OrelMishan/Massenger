import Message from "./message";
import registeredUsers from "./Users";

function Contact({contact, setContact, setListMessage, prevContact, username,listMessage}) {
    const lastMessage = (message) => {
        if(message.type === "image") {
            return  <img src={message.value} className="last-message-image" alt="not found"/>
        }else if(message.type === "video"){
            return <i className="bi bi-person-video3 last-message-image"/>
        }
        else if(message.type === "record"){
            return <i className="bi bi-mic-fill last-message-image"/>
        } else if(message.type === "text"){
            return <p className="mb-1 message-peak-text">{message.value}</p>        }
    }

    return (
        <a className="list-group-item" id="transparent-bubble" onClick={()=> {
            if (prevContact){
                let index = registeredUsers.findIndex((i) => (i.username === username));
                let contactIndex = registeredUsers[index].data.findIndex((i) => (i.contactName === prevContact.contactName));
                registeredUsers[index].data[contactIndex].messages=listMessage;
            }
            setContact(contact);
            setListMessage(contact.messages);

        }}>
            <div className="d-flex justify-content-between">
                <img className="rounded-circle contact-pic"
                     src={"face.jpg"}/>


            </div>
            <h5 className="mb-1 big-text user-name">{contact.contactName}</h5>
            <small className="text-muted date-text">{contact.lastMessageTime}</small>
            {lastMessage(contact.messages[contact.messages.length-1])}
            {/*<p className="mb-1 message-peak-text">{contact.messages[contact.messages.length-1].value}</p>*/}
        </a>
    )
}

export default Contact