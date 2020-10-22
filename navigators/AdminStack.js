import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserProductScreen from '../screens/users/UserProducts'
import sharedOptions from './sharedStackOptions'

const Stack = createStackNavigator()

const AdminStack = props => {
    return <Stack.Navigator
        screenOptions={({ navigation }) => ({
            ...sharedOptions(navigation)
        })}
    >
        <Stack.Screen
            name='UserProducts'
            component={UserProductScreen}
            options={{ title: 'Your Products' }}
        />
    </Stack.Navigator>
}

export default AdminStack
