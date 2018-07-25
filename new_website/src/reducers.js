import{
    CHANGE_TOPIC,
    CHANGE_NUMBER,
    CHANGE_LOGIN
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

const initalTopic = {
    topic: ['education', 'work', 'projects', 'skills', 'activities'],
    length: 2
}

export const changeTopic = (state = initalTopic, action = {}) => {
    switch(action.type){
        case CHANGE_TOPIC:
            return {...state, topic: action.payload}
        default:
            return state;
    }
}

const initialNumber = {
    number: '1',
}

export const changeNumber = (state = initialNumber, action = {}) => {
    switch(action.type){
        case CHANGE_NUMBER:
            return Object.assign({}, state, {number: action.payload});
        default:
            return state;
    }
}
