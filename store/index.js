import { createStore, combineReducers } from 'redux'

import productsReducers from './product/reducer'
import cartReducer from './cart/reducer'

import { actions as cartActions } from './cart/actions'

const rootReducer = combineReducers({
    products: productsReducers,
    cart: cartReducer
})

const store = createStore(rootReducer)

export default store

const actions = {
    ...cartActions
}

export {
    actions
}
