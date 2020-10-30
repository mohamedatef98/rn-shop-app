import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './navigators/Drawer'

const Main = () => {
    return <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
}

export default Main
