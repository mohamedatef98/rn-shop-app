import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import Input from './Input'

const ProductForm = ({ product, onChange, errors, priceEditable = false }) => {

    return <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView>
            <Input
                label='Title'
                value={product.title}
                onChange={title => onChange({ ...product, title })}
                error={errors?.title}
            />
            <Input
                label='Image URL'
                value={product.imageUrl}
                onChange={imageUrl => onChange({ ...product, imageUrl })}
                error={errors?.imageUrl}
            />
            <Input
                label='Price'
                value={product.price}
                onChange={price => onChange({ ...product, price })}
                editable={priceEditable}
                keyboardType='numeric'
                error={errors?.price}
            />
            <Input
                label='Description'
                value={product.description}
                onChange={description => onChange({ ...product, description })}
                error={errors?.description}
            />
        </ScrollView>
    </KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ProductForm
