import React from 'react'
import { View, Text } from 'react-native'

const ProductDetails = ({ route }) => {
    const product = route?.params?.product
    return <View>
        <Text>{product.title}</Text>
    </View>
}

export default ProductDetails
