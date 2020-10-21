import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverview'
import ProductDetailsScreen from '../screens/shop/ProductDetails'
import CartScreen from '../screens/shop/Cart'
import OrdersScreen from '../screens/orders/Orders'
import { HeaderButton } from '../components'

import sharedOptions from './sharedStackOptions'
import { Platform } from 'react-native'

const Stack = createStackNavigator()

const ShopStack = props => {
    return <Stack.Navigator
        screenOptions={({ navigation }) => ({
            ...sharedOptions(navigation),
            headerRight: ({ tintColor }) => <HeaderButton
                color={tintColor}
                size={20}
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                title='Cart'
                onPress={() => navigation.navigate('Cart')}
            />
        })}
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
        <Stack.Screen
            name='Cart'
            component={CartScreen}
            options={{ title: 'Cart' }}
        />
        <Stack.Screen
            name='Orders'
            component={OrdersScreen}
            options={{ title: 'Orders' }}
        />
    </Stack.Navigator>
}

export default ShopStack
