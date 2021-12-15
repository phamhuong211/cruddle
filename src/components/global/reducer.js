//tạo ra đối số cho useReducer() trong Global Provider
//xử lý các actions

import {ADD_ITEM} from './constants'


// array chứa các object {productId, quantity, product name, product price}
const initState = []

//muốn viết nested reducer cho 1 state

function reducer(state, action) {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload]
        default:
            return state
    }
}

export {initState}
export default reducer