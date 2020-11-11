import React, { useContext, useEffect, useState, useCallback } from 'react'
import { Alert, View, StyleSheet, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import { Product } from '../../models'
import { actions } from '../../store/product/actions'

const emptyProduct = new Product('', '', '', '', '', '')

export default function AddProduct({ navigation }) {
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleFormSubmit = useCallback(
        ({ title, imageUrl, price, description }) => {
            setSaving(true)
            dispatch(actions.addProduct({
                title,
                imageUrl,
                price: +price,
                description
            }))
                .catch(e => setError(true))
                .then(() => navigation.navigate('UserProducts'))
                .finally(() => setSaving(false))
        },
        [navigation]
    )

    useEffect(() => {
        if (error) Alert.alert('Error', 'An Error happened while saving your products', [
            { text: 'Ok', onPress: () => navigation.navigate('UserProducts') }
        ])
    }, [error])

    if (saving) return <View style={styles.centered}>
        <ActivityIndicator animating size='large' />
    </View>

    return <ProductForm initialProduct={emptyProduct} onSubmit={handleFormSubmit} priceEditable />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
