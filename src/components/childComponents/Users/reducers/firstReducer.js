import {ADD_FIRST, REMOVE_FIRST} from '../actions/firstActions'


const  firstReducer = (state, action) => {
    switch (action.type) {
        case ADD_FIRST:
            return [...state, action.payload]
        case REMOVE_FIRST:
            state = state.filter((_, index) => {
                return index !== action.payload
            })
            return state
        default:
            return state
    }

}

export default firstReducer