// rafce atajo
import React from 'react'
import Logo from "../Logotipo/Logotipo"
import Cartwidget from "../CartWidget/CartWidget"
import "./Navbar.css"
import { NavLink } from 'react-router-dom'
import Search from '../Search/Search'

const Navbar = () => {
    return (
        <nav  className="navbar fondo-navbar navbar-expand-lg ">
            <div className="container-fluid">
                <Logo/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" aria-current="page" to={"/"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/productos"}>Productos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/nosotros"} aria-disabled="true">Nosotros</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/servicios"} aria-disabled="true">Servicios</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to={"/"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</NavLink>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <NavLink active="true" className="dropdown-item" to={"/marcas/krachitos"}>Krachitos</NavLink>
                                </li>
                                <li>
                                    <NavLink active="true"  className="dropdown-item" to={"/marcas/5-hispanos"}>5Hispanos</NavLink>
                                </li>
                                <li>
                                    <NavLink active="true"  className="dropdown-divider"></NavLink>
                                </li>
                                <li>
                                    <NavLink active="true"  className="dropdown-item" to={"/marcas/macritas"}>Macritas</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Search className="form-control d-flex w-25 mx-4"/>
                    <Cartwidget/>
                </div>
            </div>
        </nav>
    );
};
export default Navbar