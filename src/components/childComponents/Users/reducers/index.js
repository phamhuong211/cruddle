import firstReducer from './firstReducer';
import secondReducer from './secondReducer';

const initialState = {
    first: [],
    second: [],
}

const combineReducers = reducers => {
    return (state, action) => {
        return Object.keys(reducers).reduce(
            (acc, prop) => {
                return ({
                    ...acc,
                    ...reducers[prop]({ [prop]: acc[prop] }, action),
                })
            },
            state
        )
    }
}

const reducers = combineReducers({
    firstReducer: firstReducer,
    secondReducer: secondReducer
})

export { initialState, combineReducers, reducers }