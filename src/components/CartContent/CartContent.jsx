import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import CartElements from "./CartElements"
import "./CartContent.css"

const CartContent = () => {
    
    const { cart } = useContext(CartContext);
    

    return cart.length > 0 ?(  
    <>
        <CartElements/>
    </>
    ) : (
        <h2 className="cart-message-center">Tu carrito esta vacio</h2>
    );
};

export default CartContent

