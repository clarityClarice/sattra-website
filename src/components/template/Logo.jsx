import React from 'react'
import { Link } from 'react-router-dom'
import './Logo.css'

import logo from '../../Assets/Images/logo.jpg'

export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="Sattra"/>
        </Link>
    </aside>