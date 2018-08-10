import {
    CHANGE_NUMBER,
    CHANGE_LOGIN,
} from './constants.js';

export const changeNumber = (number) => ({
    type: CHANGE_NUMBER,
    payload: number
})

export const login = (user) => ({
    type: CHANGE_LOGIN,
    payload: user
})
