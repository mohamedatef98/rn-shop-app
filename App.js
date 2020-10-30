import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import { loadAsync } from 'expo-font'

import { FontPaths } from './theme'
import Main from './Main'
import store from './store'

const loadFonts = () => loadAsync(FontPaths)

export default function App() {
    const [isLoading, setIsLoading] = useState(true)
    return isLoading ? <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsLoading(false)}
        onError={console.err}
    /> : <Provider store={store}>
            <Main />
        </Provider>
}
