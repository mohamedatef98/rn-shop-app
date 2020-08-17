import React from 'react'
import { ScrollView, View, Text, Image, StyleSheet, Button } from 'react-native'

const ProductDetails = ({ route, onAddToCart }) => {
    const product = route?.params?.product || {}

    return <ScrollView>
        <Image source={{ uri: product.imageUrl }} style={styles.image} />
        <View style={styles.buttonContainer}>
            <Button onPress={onAddToCart} title='Add to Cart' />
        </View>
        <Text style={[styles.title, styles.textCenter]}>{product.title}</Text>
        <Text style={[styles.description, styles.textCenter]}>{product.description}</Text>
    </ScrollView>
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10
    },
    textCenter: {
        textAlign: 'center'
    },
    title: {
        color: '#888',
        fontSize: 20,
        marginVertical: 20
    },
    description: {
        fontSize: 14,
        marginHorizontal: 20
    }
})

export default ProductDetails
