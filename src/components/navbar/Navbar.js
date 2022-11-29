// rafce atajo

import React from 'react'
import Logo from "../Logotipo/Logotipo"
import Cartwidget from '../Cartwidget/Cartwidget'

const Navbar = () => {
    return (
        <nav className="navbar fondo-navbar navbar-expand-lg">
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Servicios</a>
                        </li>
                    </ul>
                    <form className="d-flex barra-form" role="search">
                        <input className="form-control me-2" type="search" placeholder="Buscar🔎" aria-label="Search"/>
                        <button type="submit" className="btn btn-success">Buscar</button>
                    </form>
                    <br/>
                    <span><Cartwidget/></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar