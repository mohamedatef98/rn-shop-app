import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import Input from './Input'

const ProductForm = ({ product, onChange, errors, priceEditable = false }) => {

    return <KeyboardAwareScrollView style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
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
    </KeyboardAwareScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default ProductForm
