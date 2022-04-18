import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useRef, useState} from "react";
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


function checkIfRegistered(username, password) {
    return registeredUsers.findIndex((i) => (i.username === username && i.password === password));
}

function login(username, password) {
    if (password.current.value.length < 8 || username.current.value.length === 0) {
        alert("Input is invalid!");
        return -1;
    }
    //after all checking..

    let index = checkIfRegistered(username.current.value, password.current.value);
    if (index >= 0) {
        return index;
    }
    return -1;
}


function LoginPage({setUser}) {
    let rec = null;
    const [audioUrl,setAudioUrl]=useState("");
    const myFun = async () => {
        rec = await recordAudio();
        rec.start();
    }
    const stopFun = async () => {
        const audio = await rec.stop();
        audio.play();
        setAudioUrl(audio.audioUrl);
    };


    const username = useRef(null);
    const password = useRef(null);
    const nextPage = useRef(null)

    const check = (event) => {
        event.preventDefault();
        let user = login(username, password);
        if (user >= 0) {
            setUser(registeredUsers[user]);
            nextPage.current.click();
        }
    }

    return (
        <div id="app" className="shadow log-reg-background">
            <header>MASSEGER</header>

            <Link to="/chat" ref={nextPage}/>
            <InputSec text="Username" type="text" id={username}/>
            <InputSec text="Password" type="password" id={password}/>
            <div className="mb-3 mt-2">
                <button type="button" className="btn btn-primary btn-sm shadow" onClick={check}>Login
                </button>
                <div id="register">Not registered? <Link to="/register">Click here</Link> to register</div>
            </div>
            <button onClick={myFun}>record</button>
            <button onClick={stopFun}>stop</button>
            <audio src={audioUrl} controls/>
        </div>);
}

export default LoginPage;