import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverview'
import { Colors } from '../theme'

const Stack = createStackNavigator()

const ShopStack = props => {
    return <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white'
        }}
    >
        <Stack.Screen
            name='Products'
            component={ProductsOverviewScreen}
            options={{ title: 'All Products' }}
        />
    </Stack.Navigator>
}

export default ShopStack
