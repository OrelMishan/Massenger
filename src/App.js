import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import RegisterPage from "./RegisterPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage/>}></Route>
                    <Route path={"/register"} element={<RegisterPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
