import PRODUCTS from '../../data/dummy-data'
import { ACTION_TYPES } from './actions'

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.userId === 'u1')
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(p => p.id === action.payload.id),
                userProducts: state.userProducts.filter(p => p.id === action.payload.id)
            }
        default:
            return state
    }
}

export default reducer
