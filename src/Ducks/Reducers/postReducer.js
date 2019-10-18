import axios from 'axios';

// Initial State
const initialState = {
    posts: [],
    title: '',
    post_image: '',
    content: ''
}

// Action types
const GET_USER_POSTS = 'GET_USER_POSTS';
const ADD_POST = 'ADD_POST';
const GET_POSTS_BY_TITLE = 'GET_POSTS_BY_TITLE';
const DELETE_POST = "DELETE_POST";

// Functions
export function getUserPosts() {
    return {
        type: GET_USER_POSTS,
        payload: axios.get(`/api/posts`)
    }
}
export function getPostsByTitle(searchTitle) {
    return {
        type: GET_POSTS_BY_TITLE,
        payload: axios.get(`/api/posts/title?title=${searchTitle}`)
    }
}
export function addPost(newPost) {
    return {
        type: ADD_POST,
        payload: axios.post(`/api/post`, newPost)
    }
}
export function deletePost(post_id) {
    return {
        type: DELETE_POST,
        payload: axios.delete(`/api/post/${post_id}`)
    }
}

// Reducer
export default function Reducer(state=initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case `${GET_USER_POSTS}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        case `${GET_POSTS_BY_TITLE}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        case `${ADD_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        case `${DELETE_POST}_FULFILLED`:
            return {
                ...state,
                posts: payload.data
            };
        default: 
            return state;
    }
}