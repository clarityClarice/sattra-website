import React from 'react'
import './Header.css'
import Nav from './Nav'

export default props =>
<div className="headerContent">
    <header className="header" d-none="true" d-sm-flex="true">
        <h1 className="mt-3">
            {props.title}
        </h1>
    </header>
    
    <Nav/>
</div>
    