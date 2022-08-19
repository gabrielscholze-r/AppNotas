import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Autor from '../../config/context/Autor'
import Content from '../../config/context/Content'
import './index.css'
export default function Header() {
    let navigate = useNavigate()
    const [content,setContent] = useContext(Content)
    const [autor, setAutor] = useContext(Autor)
    function sair() {
        setAutor({})
        navigate('/')
    }
    return (
        <nav className="Header flex py-1">
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl" onClick={() => {setContent(1)}}>NOVA NOTA</button>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl"onClick={() => {setContent(0)}}>MINHAS NOTAS</button>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl" onClick={()=>sair()}>SAIR</button>
        </nav>
    )
}
