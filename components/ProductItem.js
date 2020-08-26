import React from 'react'
import { View, Image, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import Text from './Text'
import { Colors } from '../theme'

const ProductItem = ({ product, onViewDetails, onToCart }) => {
    return <TouchableWithoutFeedback onPress={onViewDetails}>
        <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.imageUrl }} style={styles.image} />
            </View>
            <View style={styles.details}>
                <Text style={styles.title} mode='bold'>{product.title}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <Button title='View Details' onPress={onViewDetails} color={Colors.primary} />
                <Button title='To Cart' onPress={onToCart} color={Colors.primary} />
            </View>
        </View>
    </TouchableWithoutFeedback>
}

const styles = StyleSheet.create({
    productContainer: {
        height: 300,
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        paddingBottom: 10
    },
    imageContainer: {
        height: '60%',
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%'
    },
    title: {
        fontSize: 18,
        marginVertical: 5
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    buttonsContainer: {
        height: '25%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    }
})

export default ProductItem
