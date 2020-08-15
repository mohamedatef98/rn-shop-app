import React from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'

import ShopStack from './navigators/ShopStack'

import store from './store'

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ShopStack />
            </NavigationContainer>
        </Provider>
    )
}
