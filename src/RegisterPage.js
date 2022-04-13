import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useRef} from "react";
import registeredUsers from "./Users";

function checkValidation(username, password, nickname) {
    if (username.length === 0 || password.length === 0 || nickname === 0) {
        alert("Input is invalid!")
        return false;
    }
    let index = registeredUsers.findIndex((i) => (i.username === username))
    if (index >= 0) {
        alert("not free username")
        return false
    }
    return true;
}

function RegisterPage({setData, setUsername}) {
    const username = useRef(null);
    const password = useRef(null);
    const nickname = useRef(null);
    const nextPage = useRef(null)

    const reg = (event) => {
        event.preventDefault();
        if (checkValidation(username.current.value, password.current.value, nickname.current.value)) {
            let newUser = {username: username.current.value, password: password.current.value, data: []};
            registeredUsers.push(newUser);
            setData(newUser.data);
            setUsername(newUser.username);
            nextPage.current.click();
        }
    }
    return (
        <div id="app" className="shadow">
            <Link to="/chat" ref={nextPage}/>
            <InputSec text="Username" type="text" id={username}/>
            <InputSec text="Password" type="password" id={password}/>
            <InputSec text="Display name" type="text" id={nickname}/>
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow" onClick={reg}>Register
                </button>
                <div id="register">Already registered? <Link to="/">Click here</Link> to login</div>
            </div>
        </div>
    );
}

export default RegisterPage;