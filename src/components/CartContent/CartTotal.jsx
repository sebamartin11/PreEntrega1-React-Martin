import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';

const CartTotal = () => {
    const { cart } = useContext(CartContext);

    const total = cart.reduce((acc, el) => acc + el.precio, 0);

    return (
        <div className="cartTotal">
            <h3>Total a pagar: ${total.toFixed(2)}</h3>
        </div>
    );
};

export default CartTotal