import React, { useContext, useEffect, useState } from 'react'
import { Alert, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import ProductFormSubmitContext from '../../contexts/ProductFormSubmit'
import { actions } from '../../store/product/actions'

export default function EditProduct({ navigation, route }) {
    const [newProduct, setNewProduct] = useState(route.params.product)
    const [formErrors, setFormErrors] = useState({})
    const { setOnEditProduct } = useContext(ProductFormSubmitContext)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
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
                    setFormErrors({})
                    setSaving(true)
                    dispatch(actions.editProduct({
                        id: newProduct.id,
                        title: newProduct.title,
                        imageUrl: newProduct.imageUrl,
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

    return <ProductForm product={newProduct} onChange={setNewProduct} errors={formErrors} />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
