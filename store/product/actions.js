import { FIREBASE_API } from '../../constants'

const ACTION_TYPES = {
    DELETE_PRODUCT: 'DELETE_PRODUCT',
    ADD_PRODUCT: 'ADD_PRODUCT',
    EDIT_PRODUCT: 'EDIT_PRODUCT'
}

const actions = {
    deleteProduct: product => ({
        type: ACTION_TYPES.DELETE_PRODUCT,
        payload: product
    }),
    addProduct: product => async dispatch => {
        const response = await fetch(`${FIREBASE_API}/products.json`, {
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
    editProduct: product => ({
        type: ACTION_TYPES.EDIT_PRODUCT,
        payload: product
    })
}

export {
    actions,
    ACTION_TYPES
}
