import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

import OrderItem from '../../components/OrderItem'

export default function Orders() {
    const orders = useSelector(s => s.orders.orders)

    return <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
    />
}
