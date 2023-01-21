import React, { createContext, useContext, useState } from 'react'

const GlobalContext = createContext()

export const GlobalProvider = () => useContext(GlobalContext)

const GlobalState = ({children}) => {

    const [loading,setLoading] = useState(false)

    return (
        <GlobalContext.Provider value={{
            loading,
            setLoading
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState