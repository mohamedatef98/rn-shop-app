import PRODUCTS from '../../data/dummy-data'
import { Product } from '../../models'
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
                availableProducts: state.availableProducts.filter(p => p.id !== action.payload.id),
                userProducts: state.userProducts.filter(p => p.id !== action.payload.id)
            }
        case ACTION_TYPES.ADD_PRODUCT:
            const { title, imageUrl, price, description } = action.payload
            const newProduct = new Product(String(new Date().valueOf()), 'u1', title, imageUrl, description, price)
            const newAvailableProducts = [...state.availableProducts, newProduct]
            return {
                ...state,
                availableProducts: newAvailableProducts,
                userProducts: newAvailableProducts.filter(product => product.userId === 'u1')
            }
        default:
            return state
    }
}

export default reducer
