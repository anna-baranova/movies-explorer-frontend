import React from 'react';
import { NavLink } from "react-router-dom";
import './Logo.css'


function Logo (props) {
    return(
        <NavLink to='/'><img className="logo" src={props.logoImage} alt='логотип' /></NavLink>
    )
}

export default Logo