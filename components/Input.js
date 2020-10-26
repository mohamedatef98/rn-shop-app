import React from 'react'
import { View, StyleSheet, TextInput, Text } from 'react-native'

import { Fonts } from '../theme'

const Input = ({ value, onChange, label, editable = true, style, error, ...rest }) => {
    return <View style={[styles.inputContainer, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput
            style={[styles.input, !editable ? styles.notEditable : {}]}
            value={String(value)}
            onChangeText={onChange}
            editable={editable}
            {...rest}
        />
        <Text style={styles.error}>{error ? error : ' '}</Text>
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
    },
    error: {
        fontSize: 12,
        color: 'red'
    }
})

export default Input
