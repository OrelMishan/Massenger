import {Link} from "react-router-dom";

function RegisterPage() {
    return (

        <div id="app" className="shadow">
            <form>
                <div className="big-text">
                    <span>Username</span>
                    <input type="text" className="form-control" id="username"></input>
                </div>
                <div className="big-text">
                    <span>Password</span>
                    <input type="password" className="form-control" id="password"></input>
                </div>
                <div className="mb-1 big-text">
                    <span>Display name</span>
                    <input type="teat" className="form-control" id="nickname"></input>
                </div>
            </form>
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow">Register</button>
                <div id="register">Already registered? <Link to="/">Click here</Link> to login</div>
            </div>
        </div>
    );
}

export default RegisterPage;