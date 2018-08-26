import{
    CHANGE_EDUCATION,
    CHANGE_WORK,
    CHANGE_PROJECTS,
    CHANGE_ACTIVITIES,
    CHANGE_LOGIN,
    CHANGE_ROUTE,
    POPUP_LOGIN,
    POPUP_REGISTER
} from './constants.js'

const initialUser = {
    user: '',
    isSignedIn: false
}

export const login = (state = initialUser, action = {}) => {
    switch(action.type){
        case CHANGE_LOGIN:
            return Object.assign({}, state, {user: action.payload, isSignedIn: true}); 
        default:
            return state;
    }
}

const initialNumber = {
    education: '1',
    work: '1',
    projects: '1',
    activities: '1'
}

export const changeNumber = (state = initialNumber, action = {}) => {
    switch(action.type){
        case CHANGE_EDUCATION:
            return {...state, education: action.payload};
        case CHANGE_WORK:
            return {...state, work: action.payload};
        case CHANGE_PROJECTS:
            return {...state, projects: action.payload};
        case CHANGE_ACTIVITIES:
            return{...state, activities: action.payload};
        default:
            return state;
    }
}

const initialRoute = {
    route: 'home'
}

export const changeRoute = (state = initialRoute, action = {}) => {
    switch(action.type){
        case CHANGE_ROUTE:
            return {...state, route: action.payload};
        default:
            return state;
    }
}

const initialPopups = {
    registerPopup: false,
    loginPopup: false
}

export const activatePopup = (state = initialPopups, action = {}) => {
    switch(action.type){
        case POPUP_REGISTER: 
            return{...state, registerPopup: !(initialPopups.registerPopup)}
        case POPUP_LOGIN:
            return{...state, loginPopup: !(initialPopups.loginPopup)}
        default:
            return state;
    }
}
