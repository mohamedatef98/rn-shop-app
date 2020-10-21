import { ACTION_TYPES } from './actions'

const initialState = {
    orders: []
}

export default function ordersReducer (state = initialState, action) {
    switch(action.type) {
        case ACTION_TYPES.ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, {
                    id: new Date().toString(),
                    items: action.payload.items,
                    totalAmount: action.payload.totalAmount,
                    date: new Date()
                }]
            }
        default:
            return state
    }
}
