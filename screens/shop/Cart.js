import React, { useCallback } from 'react'
import { View, StyleSheet, Button, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Text, CartItem } from '../../components'
import { Colors } from '../../theme'
import { actions } from '../../store'

const Cart = ({ navigation }) => {
    const cart = useSelector(state => state.cart)
    const cartItems = Object.entries(cart.items).map(([id, product]) => ({
        id,
        title: product.title,
        price: product.price,
        qty: product.qty,
        sum: product.sum
    })).sort((a, b) => a.title - b.title)

    const dispatch = useDispatch()

    const handleOrderPress = useCallback(
        () => {
            if (Object.keys(cart.items).length < 1) {
                Alert.alert('No Items!', 'Add Items to Cart', [
                    { text: 'Ok' }
                ], { cancelable: true })
            }
            else {
                dispatch(actions.addOrder(cart))
                dispatch(actions.clearCart())
                navigation.navigate('Orders')
            }
        },
        [cart]
    )

    return <View style={styles.screen}>
        <View style={styles.orderSummary}>
            <Text bold style={styles.total}>Total: {' '}
                <Text style={styles.totalNumber}>${Math.abs(cart.totalAmount).toFixed(2)}</Text>

            </Text>
            <Button title='Order now' color={Colors.accent} onPress={handleOrderPress} />
        </View>
        <FlatList
            data={cartItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <CartItem
                    title={item.title}
                    qty={item.qty}
                    sum={item.sum}
                    onRemove={() => dispatch(actions.deleteFromCart(item))}
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
