import {Link} from "react-router-dom";
import InputSec from "./InputSec";

function RegisterPage() {
    return (
        <div id="app" className="shadow">
            <form>
                <InputSec text="Username" type="text" id="username"/>
                <InputSec text="Password" type="password" id="password"/>
                <InputSec text="Display name" type="text" id="nickname"/>
            </form>
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow">Register</button>
                <div id="register">Already registered? <Link to="/">Click here</Link> to login</div>
            </div>
        </div>
    );
}

export default RegisterPage;