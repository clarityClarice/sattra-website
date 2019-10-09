import React from 'react'
import './Main.css'
import Header from './Header'

export default props =>
    <React.Fragment>
        <Header {...props}/>
        
        <div className="content container-fluid">
            {props.children}
        </div>
    </React.Fragment>