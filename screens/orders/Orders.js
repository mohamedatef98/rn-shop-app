import React from 'react'
import { FlatList, Text } from 'react-native'
import { useSelector } from 'react-redux'

export default function Orders() {
    const orders = useSelector(s => s.orders.orders)

    console.log(orders)

    return <FlatList
        data={orders}
        renderItem={({ item }) => <Text>{item.totalAmount}</Text>}
    />
}
