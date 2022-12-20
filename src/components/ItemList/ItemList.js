import React from 'react'
import Card from '../Cards/Card'

const ItemList = ({data = []}) => {
    return (
        data.map(misCards => <Card key = {misCards.id} info = {misCards}/>)
    );
}

export default ItemList