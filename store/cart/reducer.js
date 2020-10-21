import { actions, ACTION_TYPES } from './actions'

const initialState = {
    items: {},
    totalAmount: 0
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TO_CART:
            if (state.items[action.payload.id]) {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [action.payload.id]: {
                            ...state.items[action.payload.id],
                            qty: state.items[action.payload.id].qty + 1,
                            sum: state.items[action.payload.id].sum + action.payload.price
                        }
                    },
                    totalAmount: state.totalAmount + action.payload.price
                }
            }
            else return {
                ...state,
                items: {
                    ...state.items,
                    [action.payload.id]: {
                        ...state.items[action.payload.id],
                        title: action.payload.title,
                        price: action.payload.price,
                        qty: 1,
                        sum: action.payload.price
                    }
                },
                totalAmount: state.totalAmount + action.payload.price
            }
        case ACTION_TYPES.DELETE_FROM_CART:
            const itemQty = state.items[action.payload.id].qty
            if (itemQty === 1) {
                const newItems = { ...state.items }
                delete newItems[action.payload.id]
                return {
                    items: newItems,
                    totalAmount: state.totalAmount - action.payload.price
                }
            }
            else if (itemQty > 1) return {
                items: {
                    ...state.items, [action.payload.id]: {
                        ...state.items[action.payload.id],
                        qty: state.items[action.payload.id].qty - 1,
                        sum: state.items[action.payload.id].sum - action.payload.price
                    }
                },
                totalAmount: state.totalAmount - action.payload.price
            }
        case ACTION_TYPES.CLEAR_CART:
            return { ...initialState }
        default:
            return state
    }
}

export default cartReducer
