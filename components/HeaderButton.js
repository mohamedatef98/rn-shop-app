import React from 'react'
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons'


const CustomHeaderButton = ({ color, size, iconName, title, onPress }) => {
    const IoniconsHeaderButton = (props) => (
        <HeaderButton {...props} IconComponent={Ionicons} iconSize={size} color={color} />
    )
    return <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
         <Item title={title} iconName={iconName} onPress={onPress} />
    </HeaderButtons>
}

export default CustomHeaderButton
