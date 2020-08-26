import React from 'react'
import { View, StyleSheet, Button, FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import { Text, CartItem } from '../../components'
import { Colors } from '../../theme'

const Cart = props => {
    const cart = useSelector(state => state.cart)
    const cartItems = Object.entries(cart.items).map(([id, product]) => ({
        id,
        title: product.title,
        price: product.price,
        qty: product.qty,
        sum: product.sum
    }))
    console.log(cartItems)
    return <View style={styles.screen}>
        <View style={styles.orderSummary}>
            <Text bold style={styles.total}>Total: {' '}
                <Text style={styles.totalNumber}>${cart.totalAmount.toFixed(2)}</Text>

            </Text>
            <Button title='Order now' color={Colors.accent} />
        </View>
        <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <CartItem
                    title={item.title}
                    qty={item.qty}
                    sum={item.sum}
                    onRemove={() => { }}
                />
            )}
        />
    </View>
}

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    orderSummary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        padding: 10,
        marginBottom: 20
    },
    total: {
        fontSize: 18
    },
    totalNumber: {
        color: Colors.primary
    }
})

export default Cart
