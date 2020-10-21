const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    DELETE_FROM_CART: 'DELETE_FROM_CART',
    CLEAR_CART: 'CLEAR_CART'
}

const actions = {
    addToCart: product => ({
        type: ACTION_TYPES.ADD_TO_CART,
        payload: product
    }),
    deleteFromCart: product => ({
        type: ACTION_TYPES.DELETE_FROM_CART,
        payload: product
    }),
    clearCart: () => ({
        type: ACTION_TYPES.CLEAR_CART
    })
}

export {
    ACTION_TYPES,
    actions
}
