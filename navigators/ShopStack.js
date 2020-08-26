import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverview'
import ProductDetailsScreen from '../screens/shop/ProductDetails' 
import { Colors, Fonts } from '../theme'

const Stack = createStackNavigator()

const ShopStack = props => {
    return <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
            headerTitleStyle: {
                fontFamily: Fonts.bold
            },
            headerBackTitleStyle: {
                fontFamily: Fonts.primary
            }
        }}
    >
        <Stack.Screen
            name='Products'
            component={ProductsOverviewScreen}
            options={{ title: 'All Products' }}
        />
        <Stack.Screen
            name='ProductDetails'
            component={ProductDetailsScreen}
            options={({ route }) => ({
                title: route?.params?.product.title || 'Product Details'
            })}
        />
    </Stack.Navigator>
}

export default ShopStack
