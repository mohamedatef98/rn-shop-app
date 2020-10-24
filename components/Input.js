import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

import { Fonts } from '../theme'

const Input = ({ value, onChange, label, editable = true, style }) => {
    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={[styles.input, !editable ? styles.notEditable : {}]}
            value={value}
            onChangeText={onChange}
            editable={editable}
        />
    </View>
}

const styles = StyleSheet.create({
    inputContainer: {
        margin: 10
    },
    label: {
        fontFamily: Fonts.bold
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    notEditable: {
        color: '#999'
    }
})

export default Input
