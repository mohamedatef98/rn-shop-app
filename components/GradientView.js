import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const GradientView = ({ children, ...rest }) => <LinearGradient colors={['#ffedff', '#ffe3ff']} {...rest}>
    {children}
</LinearGradient>

export default GradientView
