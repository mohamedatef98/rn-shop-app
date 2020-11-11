import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import LoginScreen from '../screens/auth/Login'
import SignupScreen from '../screens/auth/Signup'
import sharedStackOptions from './sharedStackOptions'

const Drawer = createDrawerNavigator()

const AuthDrawer = props => {
    return <Drawer.Navigator
        screenOptions={sharedStackOptions()}
    >
        <Drawer.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Login!' }}
        />
        <Drawer.Screen
            name='Signup'
            component={SignupScreen}
            options={{ title: 'Signup!' }}
        />
    </Drawer.Navigator>
}

export default AuthDrawer
