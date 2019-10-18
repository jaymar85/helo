import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import userReducer from './Reducers/userReducer';
import postReducer from './Reducers/postReducer';

const rootReducer = combineReducers({
    userReducer,
    postReducer
});

export default createStore(rootReducer, applyMiddleware(promise));