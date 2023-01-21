import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../Context/CartContext";
import { dameTotat } from "../../Helpers/index"
import CartElement from "../CartElement/CartElement";
import Formulario from "../Fomulario/Fomulario";
import Titulo from "../Titulo/Titulo";
import "./CartContent.css"

const CartBody = () => {
    const { cart, sacarDelCarrito,limpiarTodoElCarrito } = CartProvider();

    return (
        <>
            <Titulo greeting = {"Finalizar Compra"}/>
            <div className="container-fluid">
            <div className={` ${cart.length > 0 && " d-flex justify-content-between aling-items-center"} px-4`}>
                {cart.length > 0 && <i onClick={limpiarTodoElCarrito} className="fas fa-trash-alt pointer btn my-5 fs-3 text-danger text-center"></i>}
            </div>

            {cart.length > 0 && (
            <div className="container border m-lg-5 ">
                <div className="row">
                    <div className="container  col col-12 col-md-6 my-4 py-2 container-scroll">
                        {cart.map((product,index) => (
                            <CartElement key={index} product={product} quitar={sacarDelCarrito} />
                        ))}
                    </div>
                    <div className="col col-12 col-md-6 py-2 my-4">
                        <Formulario total={dameTotat(cart)} compra={cart} />
                    </div>
                </div>
            </div>
        )}
            {cart.length < 1 && (
                <div className="container full-height d-flex align-items-center justify-content-center ">
                    <div className="w-50">
                        <h3 className="text-center text-uppercase">el carrito esta vacio</h3>

                        <div className="my-5 d-flex">
                            <Link to="/" className="btn btn-primary w-100 text-uppercase">volver a comprar</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
        
    );
};

export default CartBody;