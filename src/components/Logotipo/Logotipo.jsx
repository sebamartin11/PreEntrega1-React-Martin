import React from 'react';
import marvar from "./logomarvar.png";
import "./Logo.css";
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <NavLink to = "/"><img src= {marvar} className ="logomarvar" /></NavLink>
        </div>
    )
}

export default Logo