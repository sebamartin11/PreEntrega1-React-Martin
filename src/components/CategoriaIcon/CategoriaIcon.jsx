import React from "react";

const CategoriaIcon = ({ marcas, size }) => {
    return (
        <>
        {marcas === "krachitos" ? (
            <i className={`fab fa-krachitos text-success ${size}`}></i>
        ) : marcas === "5hispanos" ? (
            <i className={`fas fa-hispanos text-info ${size}`}></i>
        ) : marcas === "macritas"(
            <i className={`fab fa-macritas text-dark bg-light rounded ${size}`}></i>
        )}
        </>
    );
};

export default CategoriaIcon;