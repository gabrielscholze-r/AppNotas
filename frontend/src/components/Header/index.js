import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Autor from '../../config/context/Autor'
import './index.css'
export default function Header() {
    let navigate = useNavigate()
    const [autor, setAutor] = useContext(Autor)
    function sair() {
        setAutor({})
        navigate('/')
    }
    return (
        <nav className="Header flex py-1">
            <Link to='/NewNote' className='newnote-button'><button className="button-navigation-link px-5 py-1 rounded-xl text-2xl w-full">NOVA NOTA</button></Link>
            <Link to='/NewNote' className='newnote-button'><button className="button-navigation-link px-5 py-1 rounded-xl text-2xl">MINHAS NOTAS</button></Link>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl" onClick={()=>sair()}>SAIR</button>
        </nav>
    )
}
