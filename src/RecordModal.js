import {useState} from "react";
import ChatInput from "./ChatInput";
import registeredUsers from "./Users";

const recordAudio = () =>
    new Promise(async resolve => {
        const stream = await navigator.mediaDevices.getUserMedia({audio: true});
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        const start = () => mediaRecorder.start();

        const stop = () =>
            new Promise(resolve => {
                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks);
                    const audioUrl = URL.createObjectURL(audioBlob);
                    console.log(audioUrl);
                    const audio = new Audio(audioUrl);
                    const play = () => audio.play();
                    resolve({audioBlob, audioUrl, play});
                });

                mediaRecorder.stop();
            });

        resolve({start, stop});
    });

function updateContact(contact, newMessage, username) {
    let index = registeredUsers.findIndex((i) => (i.username === username));
    let contactIndex = registeredUsers[index].data.findIndex((i) => (i.contactName === contact.contactName));
    registeredUsers[index].data[contactIndex].lastMessageTime = new Date().toLocaleString();
    registeredUsers[index].data[contactIndex].lastMessage = newMessage;
}


function RecordModal({closeModel, contact,setListMessages, username}) {
    let rec = null;
    const [audioUrl, setAudioUrl] = useState("");
    const myFun = async () => {
        rec = await recordAudio();
        rec.start();
    }
    const stopFun = async () => {
        const audio = await rec.stop();
        setAudioUrl(audio.audioUrl);
    };

    const sendRec = () => {
        let newItem = {sender: "client", type: "record", value: audioUrl}
        setListMessages(listMessages => [...listMessages, newItem]);
        updateContact(contact, newItem, username);
        closeModel(false)
    }

    return (
        <div className="modal-dialog-centered position-fixed w-50 top-0 ">
            <div id="" className="shadow-lg p-3 mb-5 rounded modelBackground">
                <line>
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                        closeModel(false)
                    }}/>
                    <div>
                        <div className="big-text">Recorder</div>
                    </div>
                </line>
                <div className="input-group">
                    <button onClick={myFun}>record</button>
                    <button onClick={stopFun}>stop</button>
                    <audio src={audioUrl} controls/>
                    <button onClick={sendRec}><i className="bi bi-send"/></button>
                </div>
            </div>
        </div>
    )
}

export default RecordModal;