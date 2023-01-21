import React from "react";
import { Link } from "react-router-dom";
import { CartProvider } from "../../Context/CartContext";
import "./CartWidget.css"

const CartWidget = ({ classname }) => {
    const { cart } = (CartProvider());

    return (
        <>
            <Link to={"/cart"} className={classname}>
                <div className="d-flex align-items-center">
                    <i className="fas fa-shopping-cart btn btn-sm text-light"></i>
                    <span className="carrito text-blue fs-5">🛒{cart.length}</span>
                </div>
            </Link>
        </>
    );
};

export default CartWidget;