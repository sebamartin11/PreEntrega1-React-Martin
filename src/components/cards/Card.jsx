import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({info}) => {

    return (
    <section className="sectionCards">
        <div className="card">
            <img src={info.img} className="productos card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{info.titulo}</h5>
                <p className="card-text">{info.precio}</p>
                <Link className= "link btn btn-primary" to={`./item/detail/${info.id}/${info.titulo}`}>{info.btnDetail}</Link>
                <Link href="#" className="btn btn-primary">{info.btnText}</Link>
            </div>
        </div>
    </section>
    );
};

export default Card;



