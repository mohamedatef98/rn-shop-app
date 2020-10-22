import React from 'react'
import { FlatList } from 'react-native'

import CartItem from './CartItems'

const CartList = ({ cartItems, onRemove, deletable }) => {
    const cartItemsArray = Object.entries(cartItems).map(([id, product]) => ({
        id,
        title: product.title,
        price: product.price,
        qty: product.qty,
        sum: product.sum
    })).sort((a, b) => a.title < b.title ? -1 : 1)

    console.log(cartItemsArray)

    return <FlatList
        data={cartItemsArray}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <CartItem
                title={item.title}
                qty={item.qty}
                sum={item.sum}
                onRemove={() => onRemove(item)}
                deletable={deletable}
            />
        )}
    />
}

export default CartList
