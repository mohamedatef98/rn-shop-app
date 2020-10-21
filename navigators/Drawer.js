import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'

import OrdersStack from './OrdersStack'
import ShopStack from './ShopStack'
import { Platform } from 'react-native'
import { Colors } from '../theme'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return <Drawer.Navigator
        drawerContentOptions={{
            activeTintColor: Colors.primary
        }}
    >
        <Drawer.Screen
            component={ShopStack}
            name='Shop'
            options={{
                drawerIcon: ({ tintColor }) => <Ionicons
                    name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    size={23}
                    color={tintColor}
                />
            }}
        />
        <Drawer.Screen
            component={OrdersStack}
            name='Orders'
            options={{
                drawerIcon: ({ tintColor }) => <Ionicons
                    name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                    size={23}
                    color={tintColor}
                />
            }}
        />
    </Drawer.Navigator>
}

export default DrawerNavigator
