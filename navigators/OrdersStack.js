import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import OrdersScreen from '../screens/orders/Orders'
import sharedOptions from './sharedStackOptions'

const Stack = createStackNavigator()

const OrdersStack = props => {
    return <Stack.Navigator
        screenOptions={({ navigation }) => ({
            ...sharedOptions(navigation)
        })}
    >
        <Stack.Screen
            name='Orders'
            component={OrdersScreen}
            options={{ title: 'Orders' }}
        />
    </Stack.Navigator>
}

export default OrdersStack
