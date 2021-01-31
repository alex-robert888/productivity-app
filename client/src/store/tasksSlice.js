
import { createSlice } from '@reduxjs/toolkit';
import { SERVER_URL_TASKS } from '../global/server';
import axios from 'axios';


export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasksList: []
    },
    reducers: {
        setTasksList: (state, action) => {
            state.tasksList = action.payload;
        },
        addTask: (state, action) => {
            state.tasksList.push(action.payload);
        }
    }
});

// actions
export const { 
    setTasksList,
    addTask
} = tasksSlice.actions;

// thunks
export const fetchTasks = () => async (dispatch) => {
    const response = await axios.get(SERVER_URL_TASKS, {
        headers: {
            Authorization: localStorage.getItem("userJwt")
        }
    });
    dispatch(setTasksList(response.data))
}


// selectors
export const selectTasks = state => state.tasks; 


// reducer
export default tasksSlice.reducer;