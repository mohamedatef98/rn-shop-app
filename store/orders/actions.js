import { FIREBASE_API } from '../../constants'

const ACTION_TYPES = {
    ADD_ORDER: 'ADD_ORDER'
}

const actions = {
    addOrder: ({ items, totalAmount }) => async dispatch => {
        const date = new Date()
        const response = await fetch(`${FIREBASE_API}/orders/u1.json`, {
            method: 'POST',
            body: JSON.stringify({ items, totalAmount, date }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const id = (await response.json()).name

        dispatch({
            type: ACTION_TYPES.ADD_ORDER,
            payload: { items, totalAmount, id, date }
        })
    }
}

export {
    ACTION_TYPES, actions
}
