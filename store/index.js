import { createStore, combineReducers } from 'redux'

import productsReducers from './product/reducer'
import cartReducer from './cart/reducer'
import ordersReducer from './orders/reducer'

import { actions as cartActions } from './cart/actions'
import { actions as ordersActions } from './orders/actions'

const rootReducer = combineReducers({
    products: productsReducers,
    cart: cartReducer,
    orders: ordersReducer
})

const store = createStore(rootReducer)

export default store

const actions = {
    ...cartActions,
    ...ordersActions
}

export {
    actions
}
