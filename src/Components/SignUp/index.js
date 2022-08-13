import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function SignUp() {
    const [loading, setLoading] = useState(false);
    const [perfilUrl, setPerfilUrl] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();
    
    const data = {
        name,
        password,
        perfilUrl
    }

    function DataSignIn(event) {

        event.preventDefault()
        setLoading(true)

        const required = axios.post("", data);
        required.then(() => navigate("/"));
        required.catch(() => alert("Não foi possível efetuar o cadastro, tente novamente!"));
    }
    return loading === false ? (
        <HomePage>
            <form onSubmit={DataSignIn}>
                <input type="text" placeholder="Nome de Usuário" value = {name} onChange={(e) => setName(e.target.value)} required/>
                <input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="text" placeholder='Url da Imagem do Perfil' value = {perfilUrl} onChange={(e) => setPerfilUrl(e.target.value)} required/>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/login"><p>Já possuí uma conta? Entre</p></Link>
        </HomePage>
    ) : (
        <HomePage>
            <form className="opacity">
            <input type="text" placeholder="Nome" value = {name} onChange={(e) => setName(e.target.value)} disabled/>
                <input type="password" placeholder='Senha' value = {password} onChange={(e) => setPassword(e.target.value)} disabled/>
                <input type="text" placeholder='url da imagem do perfil' value = {perfilUrl} onChange={(e) => setPerfilUrl(e.target.value)} disabled/>
                <button><ThreeDots color="#FFFFFF" width={298} height={15} /></button>
            </form>
            <p>Já possuí uma conta? Entre</p>
        </HomePage>
    )
}

const HomePage = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img {
    
    margin-bottom: 100.93px;
}

form {
    width:303px;


    input {
        width: 299px;
        height: 52px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 8px;
        margin-bottom: 16px;
        font-size: 19px;
        font-weight: 400;
        padding-left: 11px;

        &::placeholder {
            width: 280px;
            height: 25px;
            font-weight: 400;
            font-size: 14px;
            line-height: 25px;
            color: #7E7E7E;
        }
        &:focus {
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
        }
    }

    button{
        width: 298px;
        height: 52px;
        background: rgb(2, 2, 234);
        border-radius: 8px;
        border: 0;
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        color: #FFFFFF;
        margin: 8px 0 25px 0;
    }
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

.opacity {
    opacity: 0.7;

    input {
        background: #f2f2f2;
        color: #AFAFAF;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
    }
}
`