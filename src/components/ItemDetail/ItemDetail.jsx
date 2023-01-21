import "../ItemDetail/ItemDetail.css"
import { useContext } from 'react';
import { useEffect } from "react";
import { CartContext } from '../../Context/CartContext';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from "sweetalert2";
import useFirebase from '../../Hooks/useFirebase'
import Titulo from '../Titulo/Titulo'
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = () => {

    const {id} = useParams()
    
    const {producto, getProduct} = useFirebase()
    
    const navigate = useNavigate()
    
    useEffect(() => {
        getProduct(id)

        return () => {
            
        }
    }, [])


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


    return (
        <div>
            {producto ? (
                <>
                    <Titulo greeting = {"Detalle del producto"}/>
                    <div className='containerDetail'>
                    {<ItemCount product ={producto} />}
                        <div className='contentDetail'>
                            <h2>{producto.nombre}</h2>
                            <img className="detailImage" src={producto.img} alt={producto.nombre} />
                            <p>Stock: {producto.stock}</p>
                            <p>Precio: ${producto.precio}</p>
                            <button className='btn btn-primary' onClick={() => navigate(-1)}>Volver</button>
                            <button className='btn btn-primary' onClick={()=> buyProducts(producto)}>Comprar</button>
                        </div>
                    </div>
                </>
            ): <h1 className='titleDetail'>Cargando...</h1>}
        </div>
    )
}

export default ItemDetail


// const order = {
    //     nombre:'Hovha',
    //     apellido:'Petrosyan',
    //     email:'profe@profe.com',
    //     productos:[
    //         {
    //             stock: 24,
    //             img: "https://carrefourar.vtexassets.com/arquivos/ids/197136/7794520868341_02.jpg?v=637523691618300000",
    //             marcas: "krachitos",
    //             nombre: "Americano x 60",
    //             precio: 137,
    //             cantidad:2
    //         }
    //     ]
    // }

    // const productoGuardar = {
    //     stock: 20,
    //     img: "https://carrefourar.vtexassets.com/arquivos/ids/197136/7794520868341_02.jpg?v=637523691618300000",
    //     marcas: "krachitos",
    //     nombre: "Americano x 60",
    //     precio: 137
    // }