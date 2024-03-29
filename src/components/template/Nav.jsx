import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <div className="menu-area">
        <nav className="menu">
            <Link to="/"> Home </Link>
            <Link to="/empresa"> Empresa </Link>
            <Link to="/clientes"> Clientes </Link>
            <Link to="/parceiros"> Parceiros </Link>
            <Link to="/produtos"> Produtos </Link>
            <Link to="/contato"> Fale Conosco </Link>
        </nav>
    </div>