
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userCredentials: {
            fullName: "", 
            email: "",
            dateOfBirth: "",
            country: "",
            city: "",
            username: ""
        }
    },
    reducers: {
        setUserState: (state, action) => {
            state.userCredentials = action.payload;
        }
    }
});

// actions
export const { setUserState } = userSlice.actions;

// selectors
export const selectUserCredentials = state => state.user.userCredentials; 

// reducer
export default userSlice.reducer;