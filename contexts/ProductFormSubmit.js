import { createContext } from 'react'
export default createContext({
    onProductFormSave: (product) => {},
    setOnProductFormSave: (fn) => {} 
})
