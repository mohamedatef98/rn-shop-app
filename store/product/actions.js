const ACTION_TYPES = {
    DELETE_PRODUCT: 'DELETE_PRODUCT'
}

const actions = {
    deleteProduct: product => ({
        type: ACTION_TYPES.DELETE_PRODUCT,
        payload: product
    })
}

export {
    actions,
    ACTION_TYPES
}
