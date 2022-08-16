import {BrowserRouter, Routes, Route} from "react-router-dom";
import GeneralStyle from "../../GeneralStyle.js";
import SignUpPage from "../SignUp";
import UserContext from "../UserContext";
import { useState } from "react";
import ProfilePage from "../Profile";
import LoginPage from "../Login";

export default function App() {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [username, setUsername] = useState(localStorage.getItem("username"));
    const [user, setUser] = useState(null)
    const autentication = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    return (
        <UserContext.Provider value={{token, setToken, user, setUser, setUsername, username, autentication}} >
            <BrowserRouter>
                <GeneralStyle />
                <Routes>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/profile" element={<ProfilePage />}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider> 
    )
}