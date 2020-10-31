import React, { useCallback, useEffect, useState } from 'react'
import { View, StyleSheet, Button, Alert, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { Text, CartList } from '../../components'
import { Colors } from '../../theme'
import { actions } from '../../store'

const Cart = ({ navigation }) => {
    const cart = useSelector(state => state.cart)
    const [saving, setSaving] = useState(false)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    const handleOrderPress = useCallback(
        () => {
            if (Object.keys(cart.items).length < 1) {
                Alert.alert('No Items!', 'Add Items to Cart', [
                    { text: 'Ok' }
                ], { cancelable: true })
            }
            else {
                setSaving(true)
                dispatch(actions.addOrder(cart))
                    .then(() => {
                        dispatch(actions.clearCart())
                        navigation.navigate('Orders')
                    })
                    .catch(e => setError(true))
                    .finally(() => setSaving(false))
            }
        },
        [cart]
    )

    const handleItemRemove = useCallback(
        (item) => dispatch(actions.deleteFromCart(item))
    )

    useEffect(() => {
        if (error) Alert.alert('Error', 'Error While Saving Your Order', [{ text: 'Okay' }])
    }, [error])

    return <View style={styles.screen}>
        <View style={styles.orderSummary}>
            <Text bold style={styles.total}>Total: {' '}
                <Text style={styles.totalNumber}>${Math.abs(cart.totalAmount).toFixed(2)}</Text>

            </Text>
            {saving ?
                <ActivityIndicator animating size='large' /> :
                <Button title='Order now' color={Colors.accent} onPress={handleOrderPress} />
            }
        </View>
        <CartList cartItems={cart.items} onRemove={handleItemRemove} deletable />
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
