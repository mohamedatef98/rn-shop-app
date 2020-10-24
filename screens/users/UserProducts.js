import React, { useCallback } from 'react'
import { Button, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ProductItem from '../../components/ProductItem'
import { Colors } from '../../theme'
import { actions } from '../../store'

const UserProducts = ({ navigation }) => {
    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    const handleProductEdit = useCallback(
        (item) => {
            navigation.navigate('EditProduct', { product: item })
        },
        []
    )

    const handleProductDelete = useCallback(
        (item) => {
            dispatch(actions.deleteProduct(item))
            dispatch(actions.removeProductFromCart(item))
        },
        []
    )

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
    />
}

export default UserProducts
