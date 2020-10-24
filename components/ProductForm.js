import React from 'react'
import { ScrollView } from 'react-native'
import { Product } from '../models'
import Input from './Input'

const ProductForm = ({ product, onChange, priceEditable = false }) => {

    return <ScrollView>
        <Input
            label='Title'
            value={product.title}
            onChange={title => onChange({ ...product, title })}
        />
        <Input
            label='Image URL'
            value={product.imageUrl}
            onChange={imageUrl => onChange({ ...product, imageUrl })}
        />
        <Input
            label='Price'
            value={product.price}
            onChange={price => onChange({ ...product, price })}
            editable={priceEditable}
        />
        <Input
            label='Description'
            value={product.description}
            onChange={description => onChange({ ...product, description })}
        />
    </ScrollView>
}

export default ProductForm
