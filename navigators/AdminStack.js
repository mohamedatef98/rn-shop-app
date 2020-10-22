import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserProductScreen from '../screens/users/UserProducts'
import AddProductScreen from '../screens/users/AddProduct'
import sharedOptions from './sharedStackOptions'

import HeaderButton from '../components/HeaderButton'

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
            options={({ navigation }) => ({
                title: 'Your Products',
                headerRight: ({ tintColor }) => <HeaderButton
                    color={tintColor}
                    size={30}
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => navigation.navigate('AddProduct')}
                />
            })}
        />
        <Stack.Screen
            name='AddProduct'
            component={AddProductScreen}
            options={{ title: 'Add Product' }}
        />
    </Stack.Navigator>
}

export default AdminStack
