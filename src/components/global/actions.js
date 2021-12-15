import {
    ADD_ITEM,
    DELETE_ITEM
} from './constants'

export const addItem = payload => ({
    type: ADD_ITEM,
    payload
})

export const deleteItem = payload => ({
    type: DELETE_ITEM,
    payload
})