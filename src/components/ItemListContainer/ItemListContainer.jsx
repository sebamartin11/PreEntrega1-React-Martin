import React, {useState, useEffect} from "react";
import ItemList from '../ItemList/ItemList'
import Titulo from "../Titulo/Titulo";
// img
import image1 from '../img/papastradicionales.png'
import image2 from '../img/corteamericano.png'
import image3 from '../img/sinsal.png'
import image4 from '../img/jamonserrano.png'
import image5 from '../img/cheddar.png'
import image6 from '../img/ketchup.png'
import ItemDetail from "../ItemDetail/ItemDetail";

// array de productos
const misCards = [
{
    id: 1,
    titulo: "Tradicional x 60",
    precio: "$128.00",
    img: image1,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
},
{
    id: 2,
    titulo: "Americano x 60",
    precio: "$128.00",
    img: image2,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
},
{
    id: 3,
    titulo: "Sin sal x 60",
    precio: "$128.00",
    img: image3,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
},
{
    id: 4,
    titulo: "Jamón x 55",
    precio: "$140.00",
    img: image4,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
},
{
    id: 5,
    titulo: "Cheddar x 55",
    precio: "$140.00",
    img: image5,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
},
{
    id: 6,
    titulo: "Ketchup x 55",
    precio: "$140.00",
    img: image6,
    btnText: "Comprar",
    btnDetail: "Ver Producto",
}
];


export const ItemListContainer = () => {

const [data, setData] = useState ([]);

useEffect(() => {
    const getData = new Promise(resolve =>{
        setTimeout(() => {
            resolve(misCards);
        }, 2000);
    });
    
    getData.then(respuesta => setData(respuesta));
}, [])


return (
    <div>
        <Titulo greeting = {"Nuestros Productos"}/>
        <ItemList data={data} />
    </div>
);
};

export default ItemListContainer;
