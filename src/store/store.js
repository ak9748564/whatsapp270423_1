import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import chatReducer from '../reducers/chatReducer';

const rootReducer = combineReducers({
    chat: chatReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk]
})

export default store;