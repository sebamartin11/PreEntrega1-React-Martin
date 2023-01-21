import React from 'react'
import "./Servicios.css"
import image001 from '../../Assets/Img/servicios.jpg'
import Titulo from "../Titulo/Titulo";
const Servicios = () => {
    return (
        <>
        <Titulo greeting = {"Servicios"}/>
            <section className="container-fluid">
                <div className="row">
                    <aside className="col-sm-12 col-md-12 col-lg-6 alser"><img className="imgServicios" src={image001} alt="" /></aside>
                    <aside className="col-sm-12 col-md-12 col-lg-6 arser">
                        <h2 className="tituloServicios2"><u>Nuestros Servicios</u></h2>
                        <p className="parrafoServicios">Marvar Snacks SAS nos encargamos de llevar productos de primer nivel, hacemos entregas todos los dias habiles de Lunes a Viernes.</p>
                        <br />
                        <p className="parrafoServicios">Contamos con un sistema de reparto donde realizamos las entregas de tu pedido en 24/48hs a distintas partes de Capital Federal y Gran Buenos Aires, asegurando el compromiso con nuestros clientes.</p>
                        <br />
                        <p className="parrafoServicios">Nuestros vendedores estan a dispocisión por cualquier necesidad que tengan nuestros clientes y asi responder de manera inmediata sus inquietudes.</p>
                    </aside>
                </div>
            </section>
        </>
    )
}

export default Servicios