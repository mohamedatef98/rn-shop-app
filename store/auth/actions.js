import { FIREBASE_SIGNUP, FIREBASE_LOGIN } from "../../constants"

const ACTION_TYPES = {
    SIGNUP: 'SIGNUP',
    LOGIN: 'LOGIN'
}

const actions = {
    signUp: ({ email, password }) => async dispatch => {
        const response = await fetch(`${FIREBASE_SIGNUP}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password, returnSecureToken: true
            })
        })
        
        const resData = await response.json()
        
        if(!response.ok) throw new Error(resData.error.message)

        dispatch({
            type: ACTION_TYPES.SIGNUP,
            payload: resData
        })
    },
    logIn: ({ email, password }) => async dispatch => {
        const response = await fetch(`${FIREBASE_LOGIN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, password, returnSecureToken: true
            })
        })

        const resData = await response.json()

        if(!response.ok) throw new Error(resData.error.message)

        dispatch({
            type: ACTION_TYPES.SIGNUP,
            payload: resData
        })
    }
}

export {
    ACTION_TYPES,
    actions
}
