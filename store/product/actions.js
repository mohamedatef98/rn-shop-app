import { FIREBASE_API } from '../../constants'

const ACTION_TYPES = {
    GET_PRODUCTS: 'GET_PRODUCTS',
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    EDIT_PRODUCT: 'EDIT_PRODUCT'
}

const actions = {
    getProducts: () => async dispatch => {
        const response = await fetch(`${FIREBASE_API}/products.json`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        dispatch({
            type: ACTION_TYPES.GET_PRODUCTS,
            payload: data
        })
    },
    deleteProduct: product => async (dispatch, getState) => {
        var token = getState().auth.idToken
        const response = await fetch(`${FIREBASE_API}/products/${product.id}.json?auth=${token}`, {
            method: 'DELETE'
        })
        
        dispatch({
            type: ACTION_TYPES.DELETE_PRODUCT,
            payload: product
        })
    },
    addProduct: product => async (dispatch, getState) => {
        var token = getState().auth.idToken
        const response = await fetch(`${FIREBASE_API}/products.json?auth=${token}`, {
            method: 'POST',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const id = (await response.json()).name

        dispatch({
            type: ACTION_TYPES.ADD_PRODUCT,
            payload: { ...product, id }
        })
    },
    editProduct: product => async (dispatch, getState) => {
        var token = getState().auth.idToken
        const response = await fetch(`${FIREBASE_API}/products/${product.id}.json?auth=${token}`, {
            method: 'PATCH',
            body: JSON.stringify(product),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        dispatch({
            type: ACTION_TYPES.EDIT_PRODUCT,
            payload: product
        })
    }
}

export {
    actions,
    ACTION_TYPES
}
