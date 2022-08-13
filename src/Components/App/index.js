import {BrowserRouter, Routes, Route} from "react-router-dom";
import GeneralStyle from "../../GeneralStyle.js";
import Login from "../Login";
import SignUp from "../SignUp";


export default function App() {
    return (
        <BrowserRouter>
            <GeneralStyle />
            <Routes>
                <Route path="/signup" element={<SignUp />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
        
    )
}