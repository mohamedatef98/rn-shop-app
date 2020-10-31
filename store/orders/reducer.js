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
                    id: action.payload.id,
                    items: action.payload.items,
                    totalAmount: action.payload.totalAmount,
                    date: action.payload.date
                }]
            }
        default:
            return state
    }
}
