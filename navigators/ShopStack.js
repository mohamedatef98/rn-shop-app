import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverview'

const Stack = createStackNavigator()

const ShopStack = props => {
    return <Stack.Navigator>
        <Stack.Screen
            name='Products'
            component={ProductsOverviewScreen}
            options={{ title: 'All Products' }}
        />
    </Stack.Navigator>
}

export default ShopStack
