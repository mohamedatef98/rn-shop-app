import React, { useCallback, useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { StatusBar, Platform } from 'react-native'

import OrdersStack from './OrdersStack'
import ShopStack from './ShopStack'
import AdminStack from './AdminStack'
import { Colors } from '../theme'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    useEffect(() => {
        Platform.OS == 'android' && StatusBar.setBackgroundColor(Colors.primary)
    }, [])
    return <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: Colors.primary
        }}
    >
        <Drawer.Screen
            component={ShopStack}
            name='Shop'
            options={{
                drawerIcon: ({ color, size }) => <Ionicons
                    name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    size={size}
                    color={color}
                />
            }}
        />
        <Drawer.Screen
            component={OrdersStack}
            name='Orders'
            options={{
                drawerIcon: ({ color, size }) => <Ionicons
                    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                    size={size}
                    color={color}
                />
            }}
        />
        <Drawer.Screen
            component={AdminStack}
            name='Admin'
            options={{
                drawerIcon: ({ color, size }) => <Ionicons
                    name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    size={size}
                    color={color}
                />
            }}
        />
    </Drawer.Navigator>
}

export default DrawerNavigator
