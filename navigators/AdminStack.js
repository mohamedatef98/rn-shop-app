import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import UserProductScreen from '../screens/users/UserProducts'
import AddProductScreen from '../screens/users/AddProduct'
import sharedOptions from './sharedStackOptions'

import HeaderButton from '../components/HeaderButton'
import ProductFormSubmit from '../contexts/ProductFormSubmit'

const Stack = createStackNavigator()

const AdminStack = props => {
    const [onCreateProduct, setOnCreateProduct] = useState(() => { })
    const [onEditProduct, setOnEditProduct] = useState(() => { })

    return <ProductFormSubmit.Provider value={{
        onCreateProduct,
        onEditProduct,
        setOnCreateProduct,
        setOnEditProduct
    }}>
        <Stack.Navigator
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
                options={({ navigation }) => ({
                    title: 'Add Product',
                    headerRight: ({ tintColor }) => <HeaderButton
                        color={tintColor}
                        size={30}
                        iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
                        onPress={onCreateProduct}
                    />
                })}
            />
        </Stack.Navigator>
    </ProductFormSubmit.Provider>
}

export default AdminStack
