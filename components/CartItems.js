import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import Text from './Text'


const CartItem = ({ title, qty, sum, onRemove, deletable }) => {
    return <View style={styles.item}>
        <View style={styles.container}>
            <Text style={styles.qty}>{qty} </Text>
            <Text bold>{title}</Text>
        </View>
        <View style={styles.container}>
            <Text bold>{Math.abs(sum).toFixed(2)} </Text>
            {deletable && <TouchableOpacity onPress={onRemove} style={styles.delete}>
                <Ionicons name='ios-trash' color='red' size={30} />
            </TouchableOpacity>}
        </View>
    </View>
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    qty: {
        fontSize: 16,
        color: '#888'
    },
    delete: {
        paddingLeft: 20
    }
})

export default CartItem
