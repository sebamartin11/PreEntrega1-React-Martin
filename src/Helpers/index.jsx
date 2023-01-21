export const dameTotat = (cart) => {
    let suma = 0;
    for (let i = 0; i < cart.length; i++) {
      suma = suma + cart[i].cantidad * cart[i].precio;
    }
    return suma;
};

export const verificaSiExisteEnCarrito = (cart, productos) => {

    return cart.some((a) => a.id === productos.id)
};

export const unificarProductos = (cart, productos) => {

    return cart.map((a) => {
        if(a.id === productos.id){
            a.cantidad = productos.cantidad;
            a.stock = productos.stock;
        }
        return a;
    } )
};

export const validarTodoLLeno = (campos) => {
    
    return campos.some((campo) => campo === "")
}