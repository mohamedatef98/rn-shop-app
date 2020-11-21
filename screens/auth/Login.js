import React, { useCallback, useState } from 'react'
import { View, StyleSheet, Button, ActivityIndicator } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import isEmail from 'validator/lib/isEmail'
import { GradientView, Input, Text } from '../../components'
import { Colors } from '../../theme'
import touchError from '../../utils/touchedError'
import { actions } from '../../store'

const validate = ({ email, password }) => {
    const errors = {}

    if (!isEmail(email)) errors.email = 'Invalid Email'
    if (!password.trim()) errors.password = 'Password is required'

    return errors
}

const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handleSignupPress = useCallback(
        () => navigation.navigate('Signup'),
        [navigation]
    )

    const handleLogin = useCallback(
        ({ email, password }) => {
            setLoading(true)
            dispatch(actions.logIn({ email, password }))
                .catch(e => {
                    setError((e.message || 'An Error Occured!').replace(/_/g, ' '))
                    setTimeout(() => setError(''), 2000)
                    setLoading(false)
                })
        },
        [dispatch]
    )

    const form = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate,
        onSubmit: handleLogin
    })

    return <GradientView style={styles.gradient}>
        <KeyboardAwareScrollView contentContainerStyle={styles.formContainer}>
            <View style={styles.form}>
                <Text bold style={styles.title}>Login</Text>
                <Input
                    label='Email'
                    value={form.values.email}
                    onChange={form.handleChange('email')}
                    onBlur={form.handleBlur('email')}
                    error={touchError(form, 'email')}
                    keyboardType='email-address'
                    autoCompleteType='email'
                    returnKeyType='next'
                />
                <Input
                    label='Password'
                    value={form.values.password}
                    onChange={form.handleChange('password')}
                    onBlur={form.handleBlur('password')}
                    error={touchError(form, 'password')}
                    secureTextEntry
                    returnKeyType='done'
                />
                <View style={styles.button}>
                    {loading ?
                        <ActivityIndicator size='small' animating /> :
                        error ?
                            <Text style={styles.error} bold>{error}</Text> :
                            <Button title='Login' color={Colors.primary} onPress={form.handleSubmit} />
                    }
                </View>
                <View style={styles.button}>
                    <Button title='Signup' color={Colors.accent} onPress={handleSignupPress} />
                </View>
            </View>
        </KeyboardAwareScrollView>
    </GradientView>
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        alignSelf: 'stretch',
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 5,
        padding: 10
    },
    title: {
        alignSelf: 'center',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 20,
        borderBottomWidth: 3
    },
    button: {
        alignSelf: 'center',
        marginBottom: 20,
        width: '80%'
    },
    error: {
        textAlign: 'center'
    }
})

export default Login
