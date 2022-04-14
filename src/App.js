import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import RegisterPage from "./RegisterPage";
import ChatPage from "./ChatPage";
import {useState} from "react";


function App() {
    const [user, setUser] = useState([])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage setUser={setUser}/>}/>
                    <Route path={"/register"} element={<RegisterPage setUser={setUser}/>}/>
                    <Route path={"/chat"} element={<ChatPage user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
