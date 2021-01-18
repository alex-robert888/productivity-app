
import { createSlice } from '@reduxjs/toolkit';

export const pagesSlice = createSlice({
    name: 'pages',
    initialState: {
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