import {
    CHANGE_EDUCATION,
    CHANGE_WORK,
    CHANGE_PROJECTS,
    CHANGE_ACTIVITIES,
    CHANGE_LOGIN,
    CHANGE_ROUTE,
    POPUP_REGISTER,
    POPUP_LOGIN
} from './constants.js';

export const changeEducation = (number) => ({
    type: CHANGE_EDUCATION,
    payload: number
})

export const changeWork = (number) => ({
    type: CHANGE_WORK,
    payload: number
})

export const changeProjects = (number) => ({
    type: CHANGE_PROJECTS,
    payload: number
})

export const changeActivities = (number) => ({
    type: CHANGE_ACTIVITIES,
    payload: number
})

export const login = (user) => ({
    type: CHANGE_LOGIN,
    payload: user
})

export const changeCurrentRoute = (path) => ({
    type: CHANGE_ROUTE,
    payload: path
})

export const popupRegister = () => ({
    type: POPUP_REGISTER,
})

export const popupLogin = () => ({
    type: POPUP_LOGIN,
})
