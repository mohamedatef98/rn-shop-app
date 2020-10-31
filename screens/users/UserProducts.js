import React, { useCallback, useState, useEffect } from 'react'
import { Alert, Button, FlatList, RefreshControl, ActivityIndicator, View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'

import ProductItem from '../../components/ProductItem'
import { Colors } from '../../theme'
import { actions } from '../../store'

const UserProducts = ({ navigation }) => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()
    const [fetching, setFetching] = useState(false)
    const [refreshing, setRefreshing] = useState(false)
    const [error, setError] = useState(false)

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

    const handleProductEdit = useCallback(
        (item) => {
            navigation.navigate('EditProduct', { product: item })
        },
        []
    )

    const handleProductDelete = useCallback(
        (item) => {
            Alert.alert(
                'Are you sure?',
                'Are you sure you want to delete this product?',
                [
                    { text: 'No', style: 'cancel' },
                    {
                        text: 'Yes', style: 'destructive', onPress: () => {
                            dispatch(actions.deleteProduct(item))
                            dispatch(actions.removeProductFromCart(item))
                        }
                    }
                ]
            )
        },
        []
    )

    if (fetching) return <View style={styles.centered}>
        <ActivityIndicator animating size='large' />
    </View>

    if (error) return <View style={styles.centered}>
        <Text>An Error Occured!</Text>
        <Button title='Reload?' color={Colors.primary} onPress={handleRefresh} />
    </View>

    return <FlatList
        data={userProducts}
        renderItem={({ item }) => <ProductItem
            product={item}
            onPress={() => { }}
        >
            <Button
                title='Edit'
                onPress={() => handleProductEdit(item)}
                color={Colors.primary}
            />
            <Button
                title='Delete'
                onPress={() => handleProductDelete(item)}
                color={Colors.primary}
            />
        </ProductItem>}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}
    />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default UserProducts
