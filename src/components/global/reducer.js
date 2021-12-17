//tạo ra đối số cho useReducer() trong Global Provider
//xử lý các actions

import {
    ADD_ITEM,
    DELETE_ITEM,
} from './constants'


// array chứa các object {"productId","price", "quantityCart": 1,"productName"}
const initState = []
// console.log('init state', initState);

//muốn viết nested reducer cho 1 state thì làm như thế nào?

function reducer(state, action) {
    switch (action.type) {
        case ADD_ITEM: {
            const indexObj = state.findIndex(obj => obj.productId === action.payload.productId)
            // const objInState = state.find(obj=> obj.productId === action.payload.productId)
            if(indexObj !== -1) {
                const stateClone = [...state]
                const count = stateClone[indexObj].quantityCart;
                stateClone[indexObj].quantityCart = count + 1
                console.log('next state', stateClone[indexObj].quantityCart )
                return stateClone
            } else {
                console.log('new item');
                return [...state, action.payload]
            }
        }
        case DELETE_ITEM: {
            state = state.filter((element)=>{
                return element.productId !== action.payload
            })
            return state
        }
        default:
            console.log('default');
            return state
    }
}

export {initState}
export default reducer