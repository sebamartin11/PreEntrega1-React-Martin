import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({data}) => {

const {id} = data

    return (
    <section className="sectionCards">
        <div className="card">
            <img src={data.img} className="productos card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.titulo}</h5>
                <p className="card-text">{data.precio}</p>
                <Link className= "link btn btn-primary" to={`/item/detail/${id}`}>{data.btnDetail}</Link>
                <Link className="btn btn-primary">{data.btnText}</Link>
            </div>
        </div>
    </section>
    );
};

export default Card;



