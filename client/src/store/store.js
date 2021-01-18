
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import pagesReducer from './pagesSlice';

export default configureStore({
    reducer: {
        user: userReducer,
        pages: pagesReducer
    }
});