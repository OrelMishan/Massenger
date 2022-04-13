import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import RegisterPage from "./RegisterPage";
import ChatPage from "./ChatPage";
import {useState} from "react";


function App() {
    const [data, setData] = useState([])
    const [username, setUsername] = useState([])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage setData={setData} setUsername={setUsername}/>}/>
                    <Route path={"/register"} element={<RegisterPage setData={setData} setUsername={setUsername}/>}/>
                    <Route path={"/chat"} element={<ChatPage username={username} data={data}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
