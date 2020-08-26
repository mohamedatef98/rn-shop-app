import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { ProductItem } from '../../components'
import { actions } from '../../store/cart/actions'

const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    return <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem
            product={item}
            onViewDetails={() => navigation.navigate('ProductDetails', { product: item })}
            onToCart={() => dispatch(actions.addToCart(item))}
        />}
        keyExtractor={item => item.id}
    />
}

export default ProductsOverview
