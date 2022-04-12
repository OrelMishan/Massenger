import './App.css';
import LoginPage from "./LoginPage";
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import ChatPage from "./ChatPage";
import {useState} from "react";



function App() {
    const [data,setData] = useState([])
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<LoginPage setData={setData}/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                    <Route path={"/chat"} element={<ChatPage username={data}/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
