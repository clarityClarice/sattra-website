import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

export default props =>
    <div className="menu-area">
        <nav className="menu">
            <Link to="/"> <i className="fa fa-home"></i> Home </Link>
            <Link to="/empresa"><i className="fa fa-building"></i> Empresa </Link>
            <Link to="/produtos"><i className="fa fa-cog"></i> Produtos </Link>
            <Link to="/contato"><i className="fa fa-comments"></i> Fale Conosco </Link>
        </nav>
    </div>