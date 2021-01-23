
import { createSlice } from '@reduxjs/toolkit';
import { SERVER_URL_SESSIONS } from '../global/server';
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
    if (jwt) {
        dispatch(setUserJwt(jwt));

        const credentials= await axios.post(SERVER_URL_SESSIONS + "/jwt", {
            user: {
                jwt: jwt
            }
        });

        console.log(credentials);

        dispatch(setUserState({
            fullName: credentials.data.user.full_name,
            email: credentials.data.user.email,
            dateOfBirth: credentials.data.user.date_of_birth,
            country: credentials.data.user.country,
            city: credentials.data.user.city,
            username: credentials.data.user.username
        }));
    }
} 

// selectors
export const selectUserCredentials = state => state.user.credentials; 
export const selectUserJwt = state => state.user.jwt;
export const selectSessionStorageKeyJwt = state => state.user.sessionStorageKeyJwt;

// reducer
export default userSlice.reducer;