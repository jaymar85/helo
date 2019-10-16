import axios from 'axios';

// Initial State
const initialState = {
    user_id: null,
    username: '',
    user_image: ''
}

// Action Types
const GET_USER_SESSION = 'GET_USER_SESSION';
const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

// Functions
export function getSession() {
    return {
        type: GET_USER_SESSION,
        payload: axios.get('/auth/user')
    }
}
export function registerUser(newUser) {
    return {
        type: REGISTER_USER,
        payload: axios.post('/auth/register', newUser)
    }
}
export function loginUser(user) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', user)
    }
}
export function logoutUser() {
    return {
        type: LOGOUT_USER,
        payload: axios.post('/auth/logout')
    }
}

// Reducer
export default function Reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case `${GET_USER_SESSION}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                userImage: payload.data.user_image
            };
        case `${REGISTER_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username
            };
        case `${LOGIN_USER}_FULFILLED`:
            return {
                ...state,
                userId: payload.data.user_id,
                username: payload.data.username,
                user_image: payload.data.user_image
            };
        case `${LOGOUT_USER}_FULFILLED`:
            return {  
                ...initialState          
            };            
        default: return state;
    }
}