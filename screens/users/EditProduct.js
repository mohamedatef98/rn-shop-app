import React, { useCallback, useRef, useEffect, useState } from 'react'
import { Alert, StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { useDispatch } from 'react-redux'

import ProductForm from '../../components/ProductForm'
import { actions } from '../../store/product/actions'

export default function EditProduct({ navigation, route }) {
    const productRef = useRef(route.params.product)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleSubmit = useCallback(
        ({ title, imageUrl, description }) => {
            setSaving(true)
            dispatch(actions.editProduct({
                id: productRef.current.id,
                title,
                imageUrl,
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

    return <ProductForm initialProduct={productRef.current} onSubmit={handleSubmit} />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
