import React from 'react'
import "./ItemDetail.css"


const ItemDetail = ({ data }) => {
    return (
            <div className="containerDetail">
                <div className="detail">
                    <img className="detailImage" src={data.img} alt="" />
                    <div className="contentDetail">
                        <h2>{data.titulo}</h2>
                        <p>{data.precio}</p>
                    </div>
                </div>
            </div>
    );
}

export default ItemDetail