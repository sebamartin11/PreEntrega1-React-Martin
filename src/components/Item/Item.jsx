import React from "react";
import { Link } from "react-router-dom";
import '../Item/Item.css'

export const Item = ({data}) => {



    return (
    <section className="sectionCards">
        <div className="card col-sm-12 col-md-12 col-lg-12 col-xl-12" >
            <img src={data.img} className="productos card-img-top" alt={data.titulo} />
            <div className="card-body">
                <h5 className="card-title">{data.titulo}</h5>
                <Link className= "link btn btn-primary" to={`/productos`}>{data.btnDetail}</Link>
            </div>
        </div>
    </section>
    );
};

export default Item;



