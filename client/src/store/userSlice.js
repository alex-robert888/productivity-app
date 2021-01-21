
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        credentials: {
            fullName: "", 
            email: "",
            dateOfBirth: "",
            country: "",
            city: "",
            username: ""
        },
        jwt: ""
    },
    reducers: {
        setUserState: (state, action) => {
            state.credentials = action.payload;
        },

        // setUserJwt: (state, action) => {
        //     console.log("Setting uset jwt");
        //     state.jwt = action.payload;
        // }
    }
});

// actions
export const { 
    setUserState,
    // setUserJwt  
} = userSlice.actions;

// selectors
export const selectUserCredentials = state => state.user.credentials; 

// reducer
export default userSlice.reducer;