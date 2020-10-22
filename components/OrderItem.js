import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import moment from 'moment'

import { Colors, Fonts } from '../theme'
import CartList from './CartList'

const getFormattedOrderDate = date => moment(date).format('MMMM Do YYYY, hh:mm')

export default function OrderItem({ order }) {
    const [showDetails, setShowDetails] = useState(false)

    const handleOnDetails = useCallback(
        () => setShowDetails(s => !s),
        []
    )

    return <View style={styles.orderItem}>
        <View style={styles.summary}>
            <Text style={styles.totalAmount}>${Math.abs(order.totalAmount).toFixed(2)}</Text>
            <Text style={styles.date}>{getFormattedOrderDate(order.date)}</Text>
        </View>
        <Button color={Colors.primary} title={showDetails ? 'Hide Details' : 'Show Details'} onPress={handleOnDetails} />
        {showDetails && <CartList cartItems={order.items} style={styles.details} />}
    </View>
}

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    totalAmount: {
        fontFamily: Fonts.primary
    },
    date: {
        fontFamily: Fonts.primary,
        color: 'grey'
    },
    details: {
        alignSelf: 'stretch'
    }
})
