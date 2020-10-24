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
    addProduct: product => ({
        type: ACTION_TYPES.ADD_PRODUCT,
        payload: product
    }),
    editProduct: product => ({
        type: ACTION_TYPES.EDIT_PRODUCT,
        payload: product
    })
}

export {
    actions,
    ACTION_TYPES
}
