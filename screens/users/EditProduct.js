import React, { useContext, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import ProductFormSubmitContext from '../../contexts/ProductFormSubmit'
import { actions } from '../../store/product/actions'

export default function EditProduct({ navigation, route }) {
    const [newProduct, setNewProduct] = useState(route.params.product)
    const { setOnEditProduct } = useContext(ProductFormSubmitContext)
    const dispatch = useDispatch()

    useEffect(() => {
        setOnEditProduct(
            () => () => {
                dispatch(actions.editProduct({
                    id: newProduct.id,
                    title: newProduct.title,
                    imageUrl: newProduct.imageUrl,
                    description: newProduct.description
                }))
                Alert.alert('Done!', 'Product Edited', [{ text: 'Ok' }])
                navigation.navigate('UserProducts')
            }
        )
    }, [newProduct, navigation])
    
    return <View>
        <ProductForm product={newProduct} onChange={setNewProduct} />
    </View>
}
