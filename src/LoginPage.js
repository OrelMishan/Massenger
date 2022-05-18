import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useEffect, useRef} from "react";
import registeredUsers from "./Users";


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
    const username = useRef(null);
    const password = useRef(null);
    const nextPage = useRef(null)

    const request = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({title: 'React POST Request Example'})
    };
    useEffect(  ()=>{
        let q =   fetch("http://localhost:5108/api/Contacts/logout",request).then(ress=>ress.ok);
        if (q)
         console.log( "ok");
    },[]);


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
        </div>);
}

export default LoginPage;