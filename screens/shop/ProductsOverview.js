import React from 'react'
import { FlatList, Button } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { ProductItem } from '../../components'
import { actions } from '../../store/cart/actions'
import { Colors } from '../../theme'

const ProductsOverview = ({ navigation }) => {
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

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
    />
}

export default ProductsOverview
