import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../components/ProductItem'

const UserProducts = () => {
    const userProducts = useSelector(state => state.products.userProducts)
    return <FlatList
        data={userProducts}
        renderItem={({ item }) => <ProductItem
            product={item}
            onToCart={() => { }}
            onViewDetails={() => { }} />}
    />
}

export default UserProducts
