import React from 'react'
import './index.css'
export default function Header() {
    return (
        <nav className="Header flex py-1">
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl">NOVA NOTA</button>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl">MINHAS NOTAS</button>
            <button className="button-navigation px-5 py-1 rounded-xl text-2xl">SAIR</button>
        </nav>
    )
}
