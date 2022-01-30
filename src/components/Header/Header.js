import React from 'react';
import './Header.css'


function Header (props) {
    return(
        <header className={`header ${props.modifier}`}>
            {props.children}
        </header>
    )
}

export default Header