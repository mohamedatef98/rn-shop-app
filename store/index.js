import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import productsReducers from './product/reducer'
import cartReducer from './cart/reducer'
import ordersReducer from './orders/reducer'
import authReducer from './auth/reducer'

import { actions as cartActions } from './cart/actions'
import { actions as ordersActions } from './orders/actions'
import { actions as productActions } from './product/actions'
import { actions as authActions } from './auth/actions'

const rootReducer = combineReducers({
    products: productsReducers,
    cart: cartReducer,
    orders: ordersReducer,
    auth: authReducer
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk))

export default store

const actions = {
    ...cartActions,
    ...ordersActions,
    ...productActions,
    ...authActions
}

export {
    actions
}
