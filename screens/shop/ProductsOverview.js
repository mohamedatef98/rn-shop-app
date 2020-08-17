import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { ProductItem } from '../../components'

const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)

    return <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem
            product={item}
            onViewDetails={() => navigation.navigate('ProductDetails', { product: item })}
        />}
        keyExtractor={item => item.id}
    />
}

export default ProductsOverview
