import React, { useContext, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import ProductFormSubmitContext from '../../contexts/ProductFormSubmit'
import { Product } from '../../models'
import { actions } from '../../store/product/actions'

const emptyProduct = new Product('', '', '', '', '', 0)

export default function AddProduct({ navigation }) {
    const [newProduct, setNewProduct] = useState(emptyProduct)
    const { setOnCreateProduct } = useContext(ProductFormSubmitContext)
    const dispatch = useDispatch()

    useEffect(() => {
        setOnCreateProduct(
            () => () => {
                dispatch(actions.addProduct({
                    title: newProduct.title,
                    imageUrl: newProduct.imageUrl,
                    price: +newProduct.price,
                    description: newProduct.description
                }))
                Alert.alert('Done!', 'Product Added', [{ text: 'Ok' }])
                navigation.navigate('UserProducts')
            }
        )
    }, [newProduct, navigation])
    
    return <View>
        <ProductForm product={newProduct} onChange={setNewProduct} priceEditable />
    </View>
}
