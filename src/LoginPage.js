import {Link} from "react-router-dom";
import InputSec from "./InputSec";

function LoginPage() {
    return (
        <div id="app" className="shadow">

            <InputSec text="Username" type="text" id="username"/>
            <InputSec text="Password" type="password" id="password"/>
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow">Login</button>
                <div id="register">Not registered? <Link to="/register">Click here</Link> to register</div>
            </div>
        </div>);
}

export default LoginPage;