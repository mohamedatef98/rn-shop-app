import PRODUCTS from '../../data/dummy-data'
import { Product } from '../../models'
import { ACTION_TYPES } from './actions'

const initialState = {
    availableProducts: [],
    userProducts: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_PRODUCTS:
            const fetchedProducts = Object.entries(action.payload)
                .map(([id, { title, price, imageUrl, description }]) => new Product(id, 'u1', title, imageUrl, description, price))
            return {
                ...state,
                availableProducts: fetchedProducts,
                userProducts: fetchedProducts.filter(p => p.userId === 'u1')
            }
        case ACTION_TYPES.DELETE_PRODUCT:
            return {
                ...state,
                availableProducts: state.availableProducts.filter(p => p.id !== action.payload.id),
                userProducts: state.userProducts.filter(p => p.id !== action.payload.id)
            }
        case ACTION_TYPES.ADD_PRODUCT:
            const { id, title, imageUrl, price, description } = action.payload
            const newProduct = new Product(id, 'u1', title, imageUrl, description, price)
            const newAvailableProductsCreated = [...state.availableProducts, newProduct]
            return {
                ...state,
                availableProducts: newAvailableProductsCreated,
                userProducts: newAvailableProductsCreated.filter(product => product.userId === 'u1')
            }
        case ACTION_TYPES.EDIT_PRODUCT:
            const toBeEditedProductIdx = state.availableProducts.findIndex(p => p.id === action.payload.id)
            const newAvailableProductsEdited = [...state.availableProducts]
            newAvailableProductsEdited.splice(
                toBeEditedProductIdx,
                1,
                {
                    ...state.availableProducts[toBeEditedProductIdx],
                    title: action.payload.title,
                    imageUrl: action.payload.imageUrl,
                    description: action.payload.description
                }
            )

            return {
                ...state,
                availableProducts: newAvailableProductsEdited,
                userProducts: newAvailableProductsEdited.filter(product => product.userId === 'u1')
            }
        default:
            return state
    }
}

export default reducer
