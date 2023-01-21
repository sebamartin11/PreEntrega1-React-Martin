import { useContext } from "react";
import { createContext, useState } from "react";
import { unificarProductos, verificaSiExisteEnCarrito } from "../Helpers/index"
import { GlobalProvider } from "./GlobalContext";

export const CartContext = createContext();

export const CartProvider = () => useContext(CartContext);

const CartState = ({ children }) =>{

    const {setMostarAlerta} = GlobalProvider();

    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (productos) => {
        if (verificaSiExisteEnCarrito(cart, productos)){
            setCart(unificarProductos(cart, productos));
            setMostarAlerta(true);
            return;
        }
        setCart([...cart, productos]);
        setMostarAlerta(true);
    };

    const sacarDelCarrito = (id) => {
        let nuevoCart = cart.filter((e) => e.id !== id);
        setCart(nuevoCart);
    };

    const limpiarTodoElCarrito = () => {
        setCart([]);
    };


    return (
        <CartContext.Provider 
        value={{  cart, 
                setCart,
                agregarAlCarrito,
                limpiarTodoElCarrito,
                sacarDelCarrito,
                }}>{children}
        </CartContext.Provider>
    )

};

export default CartState;