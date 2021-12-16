//tạo ra đối số cho useReducer() trong Global Provider
//xử lý các actions

import {
    ADD_ITEM,
    DELETE_ITEM,
} from './constants'


// array chứa các object {"productId","price", "quantityCart": 1,"productName"}
const initState = []

//muốn viết nested reducer cho 1 state thì làm như thế nào?

function reducer(state, action) {
    switch (action.type) {
        case ADD_ITEM: {
            let indexObj = state.find(obj=> obj.productId === action.payload.productId)
            if(indexObj) {
                let stateClone = state
                stateClone[indexObj].quantityCart += 1
                return [...stateClone, action.payload]
            } else return [...state, action.payload]
        }
        case DELETE_ITEM: {
            state = state.filter((element)=>{
                return element.productId !== action.payload
            })
            return state
        }
        default:
            return state
    }
}

export {initState}
export default reducer