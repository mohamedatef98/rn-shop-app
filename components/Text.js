import React from 'react'
import { Text as RNText } from 'react-native'

import { Fonts } from '../theme'

const Text = ({ children, style, mode='regular',  ...rest }) => {
    const fontFamily = mode === 'bold' ? Fonts.bold : Fonts.primary
    return <RNText style={[{ fontFamily }, style]} {...rest}>{children}</RNText>
}

export default Text
