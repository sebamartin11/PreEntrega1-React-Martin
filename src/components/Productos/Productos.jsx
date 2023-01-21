import React from 'react';
import "./Productos.css";
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useFirebase from '../../Hooks/useFirebase';



const Productos = () => {

    const {productos} = useFirebase()

    const {cart, setCart} = useContext(CartContext);

    const buyProducts = (product) =>{
        setCart([...cart, product]);
        Swal.fire({
            title: product.nombre.toUpperCase(),
            imageAlt: product.nombre,
            imageWidth: 250,
            imageHeight: 320,
            imageUrl: `${product.img}`,
            text: "Se agregó al carrito",
            color: `#1df8b2`,
            width: 600,
            showConfirmButton: false,
            timer: 1500,
            background: `#005899`,
            showClass: {
                popup: "animate__animated animate__jackInTheBox",
            },
            hideClass: {
                popup: "animate__animated animate__backOutDown",
            },
        });
    }

    return  productos.map((product) => {
        return(
            <section className="sectionProducts" key={product.id}>
                <div className="cardProducts">
                    <img src={product.img} className="productos card-img-top" alt={product.nombre} />
                    <div className="card-body2">
                        <h5 className="card-title">{product.nombre}</h5>
                        <br />
                        <p className="card-text">${product.precio.toFixed(2)}</p>
                        <Link className= "link btn btn-primary"  to={`/itemDetail/${product.id}`}>Ver Producto</Link>
                        <button onClick={()=> buyProducts(product)} className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </section>
        );
    });
};


export default Productos