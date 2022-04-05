import {Link} from "react-router-dom";
function LoginPage() {
    return (
        <div id="app" className="shadow">
            <div className="big-text">
                <span>Username</span>
                <input type="text" className="form-control css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"
                       id="username">
                </input>
            </div>
            <div className="mb-2 big-text">
                <span>Password</span>
                <input type="password" className="form-control" id="password">
                </input>
            </div>
            <div className="mb-3">
                <button type="submit" id="button" className="btn btn-primary btn-sm shadow">Login</button>
                <div id="register">Not registered? <Link to="/register">Click here</Link> to register</div>
            </div>
        </div>);
}

export default LoginPage;