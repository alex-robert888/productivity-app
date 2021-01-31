import React, { useState } from "react";
import "./TaskAddForm.scss";
import BasePopUp from "components/base/BasePopUp/BasePopUp";
import '../../../assets/global-style/_classes.scss'
import axios from 'axios';
import { SERVER_URL_TASKS } from '../../../global/server'; 
import { addTask } from "store/tasksSlice";
import { useDispatch } from "react-redux";

const TaskAddForm = ({ isDisplayed, handleCloseButtonClick }) => {
    const [newTaskData, setNewTaskData] = useState({
        title: "",
        duration: "",
    });
    const dispatch = useDispatch();

    function handleInputChange(e) {
        e.preventDefault();
        setNewTaskData({
            ...newTaskData,
            [e.target.name]: e.target.value
        });
    }

    async function handleAddFormButtonClick() {
        console.log("New task data: ", newTaskData);

        // Close the pop-up 
        handleCloseButtonClick();

        // Send new task data to server
        try {
            const response = await axios.post(SERVER_URL_TASKS, {
                task: {
                    title: newTaskData.title,
                    duration: newTaskData.duration
                }
            });
            dispatch(addTask(response.data));
        }
        catch(exc) {
            alert("Task creation failed.")
        }
    }   

    return (
        <article className="task-add-form">
            <BasePopUp 
                heading="New Task"
                text="Enter the new task details below."
                isDisplayed={isDisplayed}
                handleCloseButtonClick={() => handleAddFormButtonClick()}
            >
                <form className="form">
                    <div className="input-label">
                        <label htmlFor="title">title</label>
                        <input type="text" name="title" onChange={(e) => handleInputChange(e)} />
                    </div>

                    <div className="input-label">
                        <label htmlFor="duration">duration</label>
                        <input type="text" name="duration" onChange={(e) => handleInputChange(e)} />
                    </div>
                </form>
            </BasePopUp> 
        </article>
    );
}

export default TaskAddForm;