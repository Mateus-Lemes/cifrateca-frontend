import logo from "../Assets/CIFRATECA__2_-removebg-preview.png"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import UserContext from "../UserContext.js";
import Input from "../Styles/Input";
import Button from "../Styles/Button";
import InputDisable from "../Styles/InputDisable";
import styled from "styled-components";

export default function LoginPage() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const object = useContext(UserContext);

    const data = {
        username,
        password
    }

    function Login(event) {

        event.preventDefault();

        setLoading(true);

        const required = axios.post("http://localhost:5000/signin", data);
        required.then((response) => {
            const {token, user} = response.data
            object.setToken(token);
            object.setUser(user);
            object.setUsername(user.username)
            localStorage.setItem("token", token);
            localStorage.setItem("username", user.username);
            setTimeout(()=> navigate("/profile"), 1000)
        });

        required.catch(() => {alert("Email e/ou senha inválido(s), tente novamente!"); setLoading(false);});
    }

    return loading === false ? (
        <LoginPageStyled>
            <img src={logo} alt=""/>
            <form onSubmit={Login}>
                <Input type="text" placeholder='Username' value = {username} onChange={(e) => setUsername(e.target.value)} required/>
                <Input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/signup"><p>Não possui uma conta? Cadastre-se!</p></Link>
        </LoginPageStyled>
    ) : (
        <LoginPageStyled>
            <img src={logo} alt=""/>
            <form className="opacity">
                <InputDisable type="text" placeholder='Username' value = {username} onChange={(e) => setUsername(e.target.value)} disabled/>
                <InputDisable type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} disabled/>
                <Button><ThreeDots color="#FFFFFF" width={298} height={15} /></Button>
            </form>
            <p>Não possui uma conta? Cadastre-se!</p>
        </LoginPageStyled> 
    )
}

const LoginPageStyled = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
    background-color: lightgray;
    width: 299px;
    border: 1px solid lightgray; 
    border-radius: 10px;
    margin-bottom: 16px;
    
}

form {
    width:303px;
}

p {
    width: 226px;
    height: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    text-decoration-line: underline;
    color: #000000;
}
`