import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

import ProductsOverviewScreen from '../screens/shop/ProductsOverview'
import ProductDetailsScreen from '../screens/shop/ProductDetails'
import CartScreen from '../screens/shop/Cart'
import OrdersScreen from '../screens/orders/Orders'
import { Colors, Fonts } from '../theme'
import { HeaderButton } from '../components'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

const ShopStack = props => {
    return <Stack.Navigator
        screenOptions={({ navigation }) => ({
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
            headerTitleStyle: {
                fontFamily: Fonts.bold
            },
            headerBackTitleStyle: {
                fontFamily: Fonts.primary
            },
            headerRight: ({ tintColor }) => <HeaderButton color={tintColor} size={20} iconName='ios-cart' title='Cart' onPress={() => navigation.navigate('Cart')} />
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
