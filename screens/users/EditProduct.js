import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import ProductFormSubmitContext from '../../contexts/ProductFormSubmit'
import { actions } from '../../store/product/actions'

export default function EditProduct({ navigation, route }) {
    const [newProduct, setNewProduct] = useState(route.params.product)
    const [formErrors, setFormErrors] = useState({})
    const { setOnEditProduct } = useContext(ProductFormSubmitContext)
    const dispatch = useDispatch()

    useEffect(() => {
        setOnEditProduct(
            () => () => {
                const formErrors = {}

                if (!newProduct.title.trim()) formErrors.title = 'Title is required'
                if (!newProduct.description.trim()) formErrors.description = 'Description is required'
                if (!newProduct.imageUrl.trim()) formErrors.imageUrl = 'Image URL is required'


                if (Object.keys(formErrors).length) setFormErrors(formErrors)
                else {
                    dispatch(actions.editProduct({
                        id: newProduct.id,
                        title: newProduct.title,
                        imageUrl: newProduct.imageUrl,
                        description: newProduct.description,
                        price: newProduct.price
                    }))
                    Alert.alert('Done!', 'Product Edited', [{ text: 'Ok' }])
                    navigation.navigate('UserProducts')
                }
            }
        )
    }, [newProduct, navigation])

    return <ProductForm product={newProduct} onChange={setNewProduct} errors={formErrors} />
}
