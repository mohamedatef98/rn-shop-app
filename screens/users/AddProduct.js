import React, { useContext, useEffect, useState } from 'react'
import { Alert, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import ProductFormSubmitContext from '../../contexts/ProductFormSubmit'
import { Product } from '../../models'
import { actions } from '../../store/product/actions'

const emptyProduct = new Product('', '', '', '', '', 0)

export default function AddProduct({ navigation }) {
    const [newProduct, setNewProduct] = useState(emptyProduct)
    const [formErrors, setFormErrors] = useState({})
    const { setOnCreateProduct } = useContext(ProductFormSubmitContext)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        setOnCreateProduct(
            () => () => {
                const formErrors = {}

                if (!newProduct.title.trim()) formErrors.title = 'Title is required'
                if (!newProduct.description.trim()) formErrors.description = 'Description is required'
                if ((+newProduct.price) < 0) formErrors.price = 'Invalid Price'
                if (!newProduct.imageUrl.trim()) formErrors.imageUrl = 'Image URL is required'


                if (Object.keys(formErrors).length) setFormErrors(formErrors)
                else {
                    setSaving(true)
                    setFormErrors({})
                    dispatch(actions.addProduct({
                        title: newProduct.title,
                        imageUrl: newProduct.imageUrl,
                        price: +newProduct.price,
                        description: newProduct.description
                    }))
                        .catch(e => setError(true))
                        .then(() => navigation.navigate('UserProducts'))
                        .finally(() => setSaving(false))
                }
            }
        )
    }, [newProduct, navigation])

    useEffect(() => {
        if (error) Alert.alert('Error', 'An Error happened while saving your products', [
            { text: 'Ok', onPress: () => navigation.navigate('UserProducts') }
        ])
    }, [error])

    if (saving) return <View style={styles.centered}>
        <ActivityIndicator animating size='large' />
    </View>

    return <ProductForm product={newProduct} onChange={setNewProduct} priceEditable errors={formErrors} />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
