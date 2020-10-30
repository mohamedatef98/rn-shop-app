import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import DrawerNavigator from './navigators/Drawer'
import { actions } from './store'

const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(actions.getProducts())
    }, [])

    return <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
}

export default Main
