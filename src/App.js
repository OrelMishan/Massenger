import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import RegisterPage from "./RegisterPage";
import ChatPage from "./ChatPage";



function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage/>}></Route>
                    <Route path={"/register"} element={<RegisterPage/>}></Route>
                    <Route path={"/chat"} element={<ChatPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
