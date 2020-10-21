const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART'
}

const actions = {
    addToCart: product => ({
        type: ACTION_TYPES.ADD_TO_CART,
        payload: product
    }),
    deleteFromCart: product => {
        console.log('Producet', product)
        return {
            type: ACTION_TYPES.DELETE_FROM_CART,
            payload: product
        }
    }
}

export {
    ACTION_TYPES,
    actions
}
