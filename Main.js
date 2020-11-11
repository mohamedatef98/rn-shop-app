import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useSelector } from 'react-redux'

import DrawerNavigator from './navigators/Drawer'
import AuthDrawer from './navigators/AuthDrawer'

const Main = () => {
    const auth = useSelector(s => s.auth.auth)
    return <NavigationContainer>
        {auth ? <DrawerNavigator /> : <AuthDrawer />}
    </NavigationContainer>
}

export default Main
