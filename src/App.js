import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import RegisterPage from "./RegisterPage";
import ChatPage from "./ChatPage";
import {useState} from "react";


function App() {
    const [user, setUser] = useState([])
    return (
        <div className="chat-page-background">
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                    <Route path={"/chat"} element={<ChatPage user={user}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
