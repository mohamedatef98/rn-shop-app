import React, { useCallback, useMemo, useState } from 'react'
import { FlatList, Button, View, StyleSheet, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import { ProductItem } from '../../components'
import { actions } from '../../store'
import { Colors } from '../../theme'


const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleRefresh = useCallback(
        () => {
            setFetching(true)
            setError(false)
            dispatch(actions.getProducts())
                .catch(() => setError(true))
                .finally(() => setFetching(false))
        },
        []
    )

    useFocusEffect(handleRefresh)

    const errorElement = useMemo(
        () => <View style={styles.centered}>
            <Text>An Error Occured!</Text>
            <Button title='Reload?' color={Colors.primary} onPress={handleRefresh} />
        </View>,
        [handleRefresh]
    )

    const emptyElement = useMemo(
        () => <View style={styles.centered}>
            <Text>You don't have any products</Text>
        </View>,
        []
    )

    return <FlatList
        refreshing={fetching}
        onRefresh={handleRefresh}
        data={products}
        renderItem={({ item }) => <ProductItem
            product={item}
            onPress={() => navigation.navigate('ProductDetails', { product: item })}
        >
            <Button
                title='View Details'
                onPress={() => navigation.navigate('ProductDetails', { product: item })}
                color={Colors.primary}
            />
            <Button
                title='To Cart'
                onPress={() => dispatch(actions.addToCart(item))}
                color={Colors.primary}
            />
        </ProductItem>}
        keyExtractor={item => item.id}
        ListEmptyComponent={fetching ? null : (error ? errorElement : emptyElement)}
    />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ProductsOverview
