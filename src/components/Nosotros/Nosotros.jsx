import React from 'react'
import "./Nosotros.css"
import Titulo from "../Titulo/Titulo";
import image00 from '../../Assets/Img/camionmarvar.png'

const Nosotros = () => {
    return (
        <>
        <Titulo greeting = {"Nosotros"}/>
            <section className="container-fluid">
                <div className="row">
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 al">
                        <img className="imgCamion" src={image00} alt="" />
                    </aside>
                    <aside className="col-sm-12 col-md-12 col-lg-6 col-xl-6 ar">
                        <h3>Quienes Somos?</h3>
                        <p>Marvar Snacks SAS es una empresa familiar, desde el año 2017 esta situada en la localidad de El Palomar, Morón, Buenos Aires. Nos dedicamos a distribuir productos alimenticios y gastronómicos de la mejor calidad teniendo como objetivo principal la satisfacción del consumidor.</p>
                        <br />
                        <p>Realizamos las entregas de las mercaderías en 24/48hs a distintas partes de Capital Federal y Gran Buenos Aires, asegurando el compromiso con nuestros clientes. Somos distribuidores oficiales de 5 Hispanos/Krachitos Snacks, además proveemos toda la linea de Natura, Cerealko (Macritas/Arrocitas), Crisjor, Sol de Junio e Inysa.</p>
                        <br />
                        <p>Contamos, con un equipo de ventas que es el encargado del seguimiento personalizado de nuestros clientes. El éxito de una empresa depende de las personas que trabajan en ella. En Marvar Snacks SAS somos conscientes de la importancia que tiene el aporte de cada colaborador desde su lugar. Valoramos el compromiso, la responsabilidad, la calidad en la atención, el deseo de superación personal y la capacidad para trabajar en equipo de quienes formamos parte de esta compañía. Tenemos un claro y único objetivo que es el de entender con profundidad lo que nuestros clientes necesitan y superar sus expectativas, generando una experiencia de compra única.</p>
                    </aside>
                </div>
            </section>
        </>
    )
}

export default Nosotros