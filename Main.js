import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './navigators/Drawer'
import AuthDrawer from './navigators/AuthDrawer'
import { useSelector } from 'react-redux'

const isSignedIn = false

const Main = () => {
    const auth = useSelector(s => s.auth)
    return <NavigationContainer>
        {auth ? <DrawerNavigator /> : <AuthDrawer />}
    </NavigationContainer>
}

export default Main
