import { createContext } from 'react'
export default createContext({
    onCreateProduct: ({ title, imageUrl, price, description }) => { },
    onEditProduct: ({ title, imageUrl, description }) => { },
    setOnCreateProduct: (fn) => { },
    setOnEditProduct: (fn) => { }
})
