import { ACTION_TYPES } from './actions'

const initialState = {
    items: {},
    totalAmount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            const product = action.payload
            if (state.items[product.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            qty: state.items[product.id].qty + 1,
                            sum: state.items[product.id].sum + product.price
                        }
                    },
                    totalAmount: state.totalAmount + product.price
                }
            }
            else return {
                ...state,
                items: {
                    ...state.items,
                    [product.id]: {
                        ...state.items[product.id],
                        title: product.title,
                        price: product.price,
                        qty: 1,
                        sum: product.price
                    }
                },
                totalAmount: state.totalAmount + product.price
            }
        default:
            return state
    }
}

export default cartReducer
