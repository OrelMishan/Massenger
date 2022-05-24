import LeftMenu from "./LeftMenu";
import RightSec from "./RightSec";
import {useState} from "react";
import {useLocation} from "react-router-dom";
import {HubConnectionBuilder, LogLevel} from "@microsoft/signalr";


function ChatPage() {
    let data = useLocation().state.id;
    const [contact, setContact] = useState(null);
    const [connection, setConnection] = useState(null);

    async function fetchContact() {
        let ser = await fetch('http://localhost:5108/api/contacts/user/' + data, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        ser = await ser.json();
        setContactList(ser[0].contacts);
    }

    async function fetchMessages() {
        let userData = await fetch("http://localhost:5108/api/contacts/" + contact.id + "/messages?username=" + data, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        userData = await userData.json();
        setListMessages(userData);
    }

    const connectServer = async () => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("http://localhost:5108/serverHub")
                .configureLogging(LogLevel.Information).build();
            connection.on("ReceiveMessage", () => {
                fetchContact();
                if (contact) {
                    fetchMessages();
                }
            });
            connection.on("ReceiveContact", () => {
                fetchContact();
            })
            await connection.start();
            await connection.invoke("Connect", data)
            setConnection(connection)
        } catch (e) {
            console.log(e);
        }
    }
    let [contactList, setContactList] = useState([]);
    const [listMessages, setListMessages] = useState([]);
    connectServer();
    return (
        <div className="chat-page-background">
            <RightSec contact={contact} listMessages={listMessages} setListMessages={setListMessages}
                      username={data} />
            <LeftMenu user={data} setContact={setContact} setListMessages={setListMessages} prevContact={contact}
                      listMessages={listMessages} contactList={contactList} setContactList={setContactList}
                      />
        </div>
    )
}

export default ChatPage;