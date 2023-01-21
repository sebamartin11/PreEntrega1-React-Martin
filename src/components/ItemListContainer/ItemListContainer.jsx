import React from 'react'
import { useState, useEffect } from 'react'
import Titulo from '../Titulo/Titulo'
import ItemList from '../ItemList/ItemList'

// img
import image100 from '../../Assets/Img/slices.krach.jpeg'
import image101 from '../../Assets/Img/slices.hisp.png'
import image102 from '../../Assets/Img/slices.macritas.jpeg'
import image103 from '../../Assets/Img/logoarrocitas.jpeg'
import image104 from '../../Assets/Img/logocrisjor.jpeg'
import image105 from '../../Assets/Img/logoinysa.jpg'

// array de prooveedores
const misProvs = [
{
    id: 100,
    titulo: "Krachitos",
    // precio: "$137.00",
    img: image100,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
},
{
    id: 101,
    titulo: "5 Hispanos",
    // precio: "$137.00",
    img: image101,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
},
{
    id: 102,
    titulo: "Macritas",
    // precio: "$137.00",
    img: image102,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
},
{
    id: 103,
    titulo: "Arrocitas",
    // precio: "$150.00",
    img: image103,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
},
{
    id: 104,
    titulo: "Crisjor",
    // precio: "$150.00",
    img: image104,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
},
{
    id: 105,
    titulo: "Inysa",
    // precio: "$150.00",
    img: image105,
    // btnText: "Comprar",
    btnDetail: "Ver Productos",
}
];

const ItemListContainer = () => {


    const [data, setData] = useState ({});

    useEffect(() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(misProvs);
            }, 2000);
        });
        
        getData.then(respuesta => setData(respuesta));
    }, [])
    
    return (
        <div>
            <Titulo greeting = {"Nuestros Proveedores"}/>
            <ItemList value={data} data ={misProvs} />
        </div>
    )
}

export default ItemListContainer