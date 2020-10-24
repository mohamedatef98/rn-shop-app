import React, { useState } from 'react'
import { View } from 'react-native'
import ProductForm from '../../components/ProductForm'

export default function AddProduct() {
    const [newProduct, setNewProduct] = useState({})
    
    return <View>
        <ProductForm product={newProduct} onChange={setNewProduct} priceEditable />
    </View>
}
