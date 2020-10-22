import React from 'react'
import { Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../components/ProductItem'
import { Colors } from '../../theme'

const UserProducts = () => {
    const userProducts = useSelector(state => state.products.userProducts)
    return <FlatList
        data={userProducts}
        renderItem={({ item }) => <ProductItem
            product={item}
            onPress={() => { }}
        >
            <Button
                title='Edit'
                onPress={() => { }}
                color={Colors.primary}
            />
            <Button
                title='Delete'
                onPress={() => { }}
                color={Colors.primary}
            />
        </ProductItem>}
    />
}

export default UserProducts
