import React, { useCallback, useContext, useEffect } from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useFormik } from 'formik'
import ProductFormSubmitContext from '../contexts/ProductFormSubmit'
import Input from './Input'
import touchedError from '../utils/touchedError'

const ProductForm = ({ initialProduct, onSubmit, priceEditable = false }) => {
    const validate = useCallback(
        (values) => {
            const formErrors = {}

            if (!values.title.trim()) formErrors.title = 'Title is required'
            if (!values.description.trim()) formErrors.description = 'Description is required'
            if(!`${values.price}`.trim() || (+values.price) < 0 || Number.isNaN(+values.price)) formErrors.price = 'Invalid Price'
            if (!values.imageUrl.trim()) formErrors.imageUrl = 'Image URL is required'

            return formErrors
        },
        [priceEditable]
    )

    const form = useFormik({
        initialValues: {
            title: initialProduct.title,
            imageUrl: initialProduct.imageUrl,
            price: initialProduct.price,
            description: initialProduct.description
        },
        validate,
        onSubmit
    })

    const { setOnProductFormSave } = useContext(ProductFormSubmitContext)

    useEffect(() => {
        setOnProductFormSave(() => form.handleSubmit)
    }, [form])

    return <KeyboardAwareScrollView style={styles.container}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <Input
                label='Title'
                value={form.values.title}
                onChange={form.handleChange('title')}
                onBlur={form.handleBlur('title')}
                error={touchedError(form, 'title')}
            />
            <Input
                label='Image URL'
                value={form.values.imageUrl}
                onChange={form.handleChange('imageUrl')}
                onBlur={form.handleBlur('imageUrl')}
                error={touchedError(form, 'imageUrl')}
            />
            <Input
                label='Price'
                value={form.values.price}
                onChange={priceEditable ? form.handleChange('price') : () => {}}
                onBlur={form.handleBlur('price')}
                editable={priceEditable}
                keyboardType='numeric'
                error={touchedError(form, 'price')}
            />
            <Input
                label='Description'
                value={form.values.description}
                onChange={form.handleChange('description')}
                onBlur={form.handleBlur('description')}
                error={touchedError(form, 'description')}
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
