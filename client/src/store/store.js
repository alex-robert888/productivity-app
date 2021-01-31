
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import pagesReducer from './pagesSlice';
import tasksReducer from './tasksSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        pages: pagesReducer,
        tasks: tasksReducer
    }
});