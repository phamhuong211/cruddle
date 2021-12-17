//actions
export const ADD_FIRST = 'add_first';
export const REMOVE_FIRST= 'remove_first';

const addFirst = payload => {
    return {
        type: ADD_FIRST,
        payload
    }
}

const removeFirst = payload => {
    return {
        type: REMOVE_FIRST,
        payload
    }
}

export {addFirst, removeFirst}