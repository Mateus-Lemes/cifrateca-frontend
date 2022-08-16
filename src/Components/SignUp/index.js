import logo from "../Assets/CIFRATECA__2_-removebg-preview.png"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";
import Input from "../Styles/Input";
import Button from "../Styles/Button";
import InputDisable from "../Styles/InputDisable";

export default function SignUpPage() {
    const [loading, setLoading] = useState(false);
    const [perfilUrl, setPerfilUrl] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const navigate = useNavigate();
    
    const data = {
        username,
        password,
        perfilUrl
    }

    function DataSignIn(event) {

        event.preventDefault()
        setLoading(true)

        const required = axios.post("http://localhost:5000/signup", data);
        required.then(() => navigate("/login"));
        required.catch((error) =>{ alert("Não foi possível efetuar o cadastro, tente novamente!"); console.log(error)});
    }
    return loading === false ? (
        <SignUpPageStyled>
            <img src={logo} alt="" />
            <form onSubmit={DataSignIn}>
                <Input type="text" placeholder="Nome de Usuário" value = {username} onChange={(e) => setUsername(e.target.value)} required/>
                <Input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <Input type="text" placeholder='Url da Imagem do Perfil' value = {perfilUrl} onChange={(e) => setPerfilUrl(e.target.value)} />
                <Button type="submit">Entrar</Button>
            </form>
            <Link to="/login"><p>Já possuí uma conta? Entre</p></Link>
        </SignUpPageStyled>
    ) : (
        <SignUpPageStyled>
            <form>
            <InputDisable type="text" placeholder="Nome" value = {username} onChange={(e) => setUsername(e.target.value)} disabled/>
                <InputDisable type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} disabled/>
                <InputDisable type="text" placeholder='url da imagem do perfil' value = {perfilUrl} onChange={(e) => setPerfilUrl(e.target.value)} disabled/>
                <Button><ThreeDots color="#FFFFFF" width={298} height={15} /></Button>
            </form>
            <p>Já possui uma conta? Entre</p>
        </SignUpPageStyled>
    )
}

const SignUpPageStyled = styled.div`
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