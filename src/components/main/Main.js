import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../navbar/Navbar'

const Main = (props) => {

    const {children} = props

    return (
        <main>
            <Navbar/>
            <ItemListContainer mititulo={"Distribuidora Marvar Snacks"}/>
            {children}
        </main>
    )
}

export default Main