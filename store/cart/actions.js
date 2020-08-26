const ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART'
}

const actions = {
    addToCart: product => ({
        type: ACTION_TYPES.ADD_TO_CART,
        payload: product
    })
}

export {
    ACTION_TYPES,
    actions
}
