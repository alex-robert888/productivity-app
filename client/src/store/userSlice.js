
import { createSlice } from '@reduxjs/toolkit';
import { SERVER_URL_USERS_AUTHENTICATED } from '../global/server';
import axios from 'axios';

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
        jwt: "",
        SESSION_STORAGE_KEY_JWT: "userJwt"
    },
    reducers: {
        setUserState: (state, action) => {
            state.credentials = action.payload;
        },

        setUserJwt: (state, action) => {
            state.jwt = action.payload;
        }
    }
});

// actions
export const { 
    setUserState,
    setUserJwt  
} = userSlice.actions;

// thunks
export const authenticateUserWithJwt = () => async (dispatch) => {
    const jwt = localStorage.getItem("userJwt");
    axios.defaults.headers.common["Authorization"] = jwt;
    if (jwt) {
        dispatch(setUserJwt(jwt));
        const credentials= await axios.get(SERVER_URL_USERS_AUTHENTICATED);

        console.log("Credentials: ", credentials);

        dispatch(setUserState({
            fullName: credentials.data.full_name,
            email: credentials.data.email,
            dateOfBirth: credentials.data.date_of_birth,
            country: credentials.data.country,
            city: credentials.data.city,
            username: credentials.data.username
        }));
    }
} 

// selectors
export const selectUserCredentials = state => state.user.credentials; 
export const selectUserJwt = state => state.user.jwt;
export const selectSessionStorageKeyJwt = state => state.user.SESSION_STORAGE_KEY_JWT;

// reducer
export default userSlice.reducer;