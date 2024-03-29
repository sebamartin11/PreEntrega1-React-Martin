import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";
import Swal from "sweetalert2";
import { validarTodoLLeno } from "../../Helpers/index";
import { CartProvider } from "../../Context/CartContext";
import CartTotal from "../CartContent/CartTotal";
import Titulo from "../Titulo/Titulo";

const Input = ({
        className,
        type,
        name,
        value,
        inputClassName,
        onChange,
        onBlur,
        placeholder,
        error,
    }) => {
    return (
        <div className={className}>
            <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={(e) => onBlur(e)}
            className={inputClassName}
            placeholder={placeholder}
            />
            {error.nombre && (
                <h6 className="text-danger my-2 text-uppercase">{error.nombre}</h6>
            )}
        </div>
    );
};

const Formulario = ({ total, compra }) => {
const { limpiarTodoElCarrito } = CartProvider();
const { fetchGenerateTicket } = useFirebase();

const [formulario, setFormulario] = useState({
    buyer: {
        email: "",
        nombre: "",
        apellido: "",
        telefono: "",
    },
    total: total,
    products: compra,
});

const [error, setError] = useState({});

const {
    buyer: { email, nombre, apellido, telefono },
} = formulario;

const onSubmit = (e) => {
    e.preventDefault();
    if (validarTodoLLeno([email, nombre, apellido, telefono])) {
        Swal.fire({
        title: "Ups!",
        text: "Faltan campos por completar",
        icon: "error",
    });
    return;
    }
    Swal.fire({
        title: "Gracias!",
        text: "Su orden de compra se genero correctamente!",
        icon: "success",
    });
    fetchGenerateTicket({ datos: formulario });
    limpiarTodoElCarrito();
};

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
        ...formulario,
        buyer: {
        ...formulario.buyer,
        [name]: value,
    },
    });
};

const handleBlur = (e) => {
    const { value, name } = e.target;
    if (value === "") {
        setError({ ...error, [name]: "Este campo es obligatorio" });
        return;
    }
    setError({});
};



return (
        <form onSubmit={onSubmit} className="container border">
            <Titulo greeting = {"Datos del cliente"}/>
            {Object.keys(formulario.buyer).map((key,index) => (
                <Input
                    key={index}
                    className="mb-3"
                    type="text"
                    name={`${key}`}
                    value={key.value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    inputClassName={`form-control ${error[key] && "is-invalid"}`}
                    placeholder={`${key}`}
                    error={error}
                />
            ))}

            <div className="border row d-flex px-2">
                <div className="col-12 col-lg-9">
                    <CartTotal/>
                </div>
                <button type="submit" className="btn btn-primary text-uppercase w-100 my-4">Finalizar Compra</button>
            </div>
            <Link to="/" className="btn btn-secondary text-uppercase my-2 w-100">Volver a comprar</Link>
        </form>
    );
};

export default Formulario;