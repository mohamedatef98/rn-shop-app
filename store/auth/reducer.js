import { ACTION_TYPES } from './actions'

const initialState = {
    auth: false,
    email: '',
    expiresIn: 0,
    idToken: '',
    localId: '',
    refreshToken: ''
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ACTION_TYPES.SIGNUP:
        case ACTION_TYPES.LOGIN:
            return {
                ...state,
                auth: true,
                email: action.payload.email,
                expiresIn: action.payload.expiresIn,
                idToken: action.payload.idToken,
                localId: action.payload.localId,
                refreshToken: action.payload.refreshToken
            }
        default:
            return state
    }
}

export default authReducer
