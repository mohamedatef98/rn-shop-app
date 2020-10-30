import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { FlatList, Button, View, ActivityIndicator, StyleSheet, RefreshControl, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import { ProductItem } from '../../components'
import { actions } from '../../store'
import { Colors } from '../../theme'


const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)
    const [fetching, setFetching] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const fetchProducts = useCallback(
        () => dispatch(actions.getProducts()),
        []
    )
   
    const handleRefresh = useCallback(
        () => {
            setRefreshing(true)
            setError(false)
            fetchProducts()
                .catch(() => setError(true))
                .finally(() => setRefreshing(false))
        },
        []
    )

    useEffect(() => {
        setFetching(true)
        fetchProducts()
            .catch(() => setError(true))
            .finally(() => setFetching(false))
    }, [])

    useFocusEffect(handleRefresh)

    if (fetching) return <View style={styles.centered}>
        <ActivityIndicator animating size='large' />
    </View>

    if (error) return <View style={styles.centered}>
        <Text>An Error Occured!</Text>
        <Button title='Reload?' color={Colors.primary} onPress={handleRefresh} />
    </View>

    return <FlatList
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
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
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
