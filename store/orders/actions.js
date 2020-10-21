const ACTION_TYPES = {
    ADD_ORDER: 'ADD_ORDER'
}

const actions = {
    addOrder: ({ items, totalAmount }) => ({
        type: ACTION_TYPES.ADD_ORDER,
        payload: { items, totalAmount }
    })
}

export {
    ACTION_TYPES, actions
}
