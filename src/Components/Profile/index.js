import logo from "../Assets/CIFRATECA__2_-removebg-preview.png"
import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { Header } from "../Styles/Header";
import UserContext from "../UserContext"
import { ProfilePageStyled } from "../Styles/ProfilePage";

export default function ProfilePage() {
    const object = useContext(UserContext);
    const [chords, setChords] = useState([])

    useEffect(()=> {
        const required = axios.get("http://localhost:5000/chords", object.autentication);
        required.then((response)=> {
            console.log(response.data)
            setChords(response.data)
            console.log(object)
        })
        required.catch(() => alert("Deu ruim")) // eslint-disable-next-line
    }, [])

    return chords.length === 0 ? (
        <ProfilePageStyled>
            <Header>
                <div>
                    <h1>Minha Lista</h1>
                    <img src={logo} alt=""/>
                </div>
            </Header>
                <h2>Olá, {object.username}! O que vamos tocar hoje?</h2>
        </ProfilePageStyled>
    ) : (
        <ProfilePageStyled>
            <Header>
                <div>
                    <h1>Minha Lista</h1>
                    <img src={logo} alt=""/>
                </div>
            </Header>
            <nav>
                <select>
                    <option value="SP">Gênero</option>
                    <option value="RJ">Favoritas</option>
                </select>
            </nav>
                <h2>Olá, {object.username}! O que vamos tocar hoje?</h2>
        </ProfilePageStyled>
    )
}