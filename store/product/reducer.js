import PRODUCTS from '../../data/dummy-data'

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product => product.userId === 'u1')
}

const reducer = (state = initialState, action) => {
    return state
}

export default reducer
