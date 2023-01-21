import React from 'react';
import "./Footer.css";
import image0 from '../../Assets/Img/logomarvarfooter.png';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer>
            <div className="grupo-1">
                <div className="box">
                    <Link to={"/"}><img className="logoMarvar" src={image0} alt="logomarvarsnacks"/></Link>
                </div>
                <div className="box">
                    <div>
                        <h3><u>Sobre nosotros</u></h3>
                        <p>Distribuidores oficiales de Krachitos Snacks, 5 Hispanos y Cerealko.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="redes">
                        <h3><u>Redes Sociales</u></h3>
                        <Link to={"/"} className="redes"><FontAwesomeIcon icon = {faFacebook}/></Link>
                        <Link to={"/"} className="redes"><FontAwesomeIcon icon = {faInstagram}/></Link>
                        <Link to={"https://wa.me/+541164328284"} className="redes"><FontAwesomeIcon icon = {faWhatsapp}/></Link>
                    </div>
                </div>
            </div>
            <div className="grupo-2">
                <div className="box">  
                    <p>Copyright 2022 © Marvarsnacks - Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer