import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

const ProductsOverview = (props) => {
    const products = useSelector(state => state.products.availableProducts)

    return <FlatList data={products} renderItem={({ item }) => <Text>{item.title}</Text>} keyExtractor={item => item.id} />
}

export default ProductsOverview
