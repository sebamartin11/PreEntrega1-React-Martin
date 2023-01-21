import React from 'react'
import {Item} from '../Item/Item'



const ItemList = ({data}) => {


    return (
        <div>
        {
            data.map(misProvs => (
                <Item key={misProvs.id} data={misProvs}/>
            ))
        }
        </div>
    )
};

export default ItemList