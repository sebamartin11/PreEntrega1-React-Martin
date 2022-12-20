import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from '../ItemDetail/ItemDetail'
import "./ItemDetailContainer.css"


export const ItemDetailContainer = () => {

    const {id} = useParams()

    const [misCards, setData] = useState ({});
    
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
            <ItemDetail data = {misCards}
            />
        </div>
    );
}

export default ItemDetailContainer