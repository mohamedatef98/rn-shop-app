import { createStore, combineReducers } from 'redux'

import productsReducers from './product/reducer'

const rootReducer = combineReducers({
    products: productsReducers
})

const store = createStore(rootReducer)

export default store
