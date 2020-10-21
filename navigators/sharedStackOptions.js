import React from 'react'
import { Platform } from 'react-native'
import { Fonts, Colors } from '../theme'
import HeaderButton from '../components/HeaderButton'

const options = (navigation) => ({
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'ios' ? Colors.primary : 'white',
    headerTitleStyle: {
        fontFamily: Fonts.bold
    },
    headerBackTitleStyle: {
        fontFamily: Fonts.primary
    },
    headerLeft: ({ tintColor }) => <HeaderButton
        color={tintColor}
        size={30}
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => navigation.toggleDrawer()}
    />
})

export default options
