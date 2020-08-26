import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { loadAsync } from 'expo-font'

import { FontPaths } from './theme'
import ShopStack from './navigators/ShopStack'

import store from './store'

const loadFonts = () => loadAsync(FontPaths)

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    if (isLoading) return <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoading(false)}
        onError={console.err}
    />
    return (
        <Provider store={store}>
            <NavigationContainer>
                <ShopStack />
            </NavigationContainer>
        </Provider>
    )
}
