import { useFocusEffect } from '@react-navigation/native'
import React, { useCallback, useMemo, useState } from 'react'
import { FlatList, StyleSheet, View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import OrderItem from '../../components/OrderItem'
import { actions } from '../../store'
import { Colors } from '../../theme'

export default function Orders() {
    const orders = useSelector(s => s.orders.orders)
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [fetching, setFetching] = useState(false)

    const handleRefresh = useCallback(
        () => {
            setFetching(true)
            setError(false)
            dispatch(actions.getOrders())
                .catch(() => setError(true))
                .finally(() => setFetching(false))
        },
        []
    )

    useFocusEffect(handleRefresh)

    const errorElement = useMemo(
        () => <View style={styles.centered}>
            <Text>An Error Occured!</Text>
            <Button title='Reload?' color={Colors.primary} onPress={handleRefresh} />
        </View>,
        [handleRefresh]
    )

    const noItemsElement = useMemo(
        () => <View style={styles.centered}>
            <Text>No Orders!</Text>
        </View>,
        []
    )

    return <FlatList
        refreshing={fetching}
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
        onRefresh={handleRefresh}
        ListEmptyComponent={(!fetching && error) ? errorElement : noItemsElement}
    />
}

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
