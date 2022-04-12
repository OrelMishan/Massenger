import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useRef} from "react";
import registeredUsers from "./Users";


function checkIfRegistered(username, password) {
    let index =  registeredUsers.findIndex((i) => (i.username === username && i.password === password));
    return registeredUsers[index].data;
}

function login(username, password) {
    if (password.current.value.length < 8) {
        alert("Input is invalid!")
    }

    //after all checking..
    return(checkIfRegistered(username.current.value, password.current.value));
}


function LoginPage({setData}) {
    const username = useRef(null);
    const password = useRef(null);
    const nextPage = useRef(null)

    const check = (event) => {
        event.preventDefault();
        setData(login(username, password,setData));
        console.log("dd")
        nextPage.current.click();
    }

    return (
        <div id="app" className="shadow">
            <Link to="/chat" ref={nextPage}/>
            <InputSec text="Username" type="text" id={username}/>
            <InputSec text="Password" type="password" id={password}/>
            <div className="mb-3">
                <button type="button" className="btn btn-primary btn-sm shadow" onClick={check}>Login
                </button>
                <div id="register">Not registered? <Link to="/register">Click here</Link> to register</div>
            </div>
        </div>);
}

export default LoginPage;