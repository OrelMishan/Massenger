import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useEffect, useRef} from "react";


async function checkIfRegistered(username, password) {
    const params = {
        username: username,
        password: password
    }
    const request = {
        method: 'POST',
        mode:'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params)
    };
    let res = await fetch("http://localhost:5108/api/Contacts/login", request);
    console.log(res.o)
    return false;
}

async function login(username, password) {
    if (password.current.value.length < 8 || username.current.value.length === 0) {
        alert("Input is invalid!");
        return -1;
    }
    //after all checking..

    return await checkIfRegistered(username.current.value, password.current.value);
}


function LoginPage() {
    const username = useRef(null);
    const password = useRef(null);
    const nextPage = useRef(null)

    // const request = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    // };
    //
    // useEffect(() => {
    //     fetch("http://localhost:5108/api/Contacts/logout", request).then(ress => ress.ok);
    // }, []);


    const check = (event) => {
        event.preventDefault();
        if (login(username, password)) {
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