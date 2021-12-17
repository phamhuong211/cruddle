//actions
export const ADD_SECOND = 'add_second';
export const REMOVE_SECOND = 'remove_second';

export const addSecond = payload => {
    return {
        type: ADD_SECOND,
        payload
    }
}

export const removeSecond = payload => {
    return {
        type: REMOVE_SECOND,
        payload
    }
}