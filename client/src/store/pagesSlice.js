
import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
        urls: {
            URL_HOME_PAGE: '/',
            URL_AUTH_PAGE: '/auth',
            URL_LOG_IN_PAGE: '/auth/login',
            URL_SIGN_UP_PAGE: '/auth/signup'
        },
        currentPage: ""
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    }
});

// actions
export const { setCurrentPage } = pagesSlice.actions;

// selectors
export const selectCurrentPage = state => state.user.currentPage; 

// reducer
export default pagesSlice.reducer;