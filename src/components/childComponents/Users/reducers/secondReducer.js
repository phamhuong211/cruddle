import { ADD_SECOND, REMOVE_SECOND } from "../actions/secondAction"


const secondReducer = (state, action) => {
    switch (action.type) {
        case ADD_SECOND:
            return [...state, action.payload]
        case REMOVE_SECOND:
            state = state.filter((_, index) => {
                return index !== action.payload
            })
            return state
        default:
            return state
    }
}

export default secondReducer