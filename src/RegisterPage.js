import {Link} from "react-router-dom";
import InputSec from "./InputSec";
import {useRef, useState} from "react";

function checkValidation(username, password, verifyPassword, nickname) {
    if (username.length === 0 || password.length === 0 || nickname === 0 || verifyPassword !== password) {
        alert("Input is invalid!")
        return false;
    }
    // let index = registeredUsers.findIndex((i) => (i.username === username))
    // if (index >= 0) {
    //     alert("not free username")
    //     return false
    // }
    return true;
}

function RegisterPage({setUser}) {
    const username = useRef(null);
    const password = useRef(null);
    const verifyPassword = useRef(null);
    const nickname = useRef(null);
    const fileInput = useRef(null);
    const [image, setImage] = useState("");
    const nextPage = useRef(null);
    const [error,setError] = useState(false);
    const showImage = (event) => {
        event.preventDefault();
        setImage(URL.createObjectURL(event.target.files[0]));
    }

    const reg = async (event) => {

        event.preventDefault();
        if (checkValidation(username.current.value, password.current.value, verifyPassword.current.value, nickname.current.value)) {
            const params = {
                id:username.current.value,
                password:password.current.value,
                name:username.current.value,
            }
            if (nickname.current.value !== "") {
                params.nickname = nickname.current.value;
            }
            if (image !== "") {
                params.photo = image;
            }
            const request = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(params)
            };
            let res = await fetch('http://localhost:5108/api/Contacts/register',request);
            if (res.ok) {
                setUser(username.current.value);
                nextPage.current.click();
            }
            else setError(true);
        }
    }
    return (
        <div id="app" className="shadow log-reg-background">
            <Link to="/chat" ref={nextPage}/>
            <InputSec text="Username" type="text" id={username}/>
            <InputSec text="Password" type="password" id={password}/>
            <InputSec text="Verify password" type="password" id={verifyPassword}/>
            <InputSec text="Display name" type="text" id={nickname}/>
            <div className="mt-1">
                <input type="file" accept="image/*" ref={fileInput} hidden={true} onChange={showImage}/>
                <button className="btn btn-primary btn-sm shadow" onClick={() => fileInput.current.click()}>
                    <i className="bi bi-file-image"/>
                </button>
            </div>
            {error&&<div className="text-danger">Something wrong</div> }
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow" onClick={reg}>Register
                </button>
                <div id="register">Already registered? <Link to="/">Click here</Link> to login</div>
            </div>
        </div>
    );
}

export default RegisterPage;