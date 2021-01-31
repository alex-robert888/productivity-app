import React, { useEffect, useState } from "react";
import "./TodayPlansPage.scss";
import "assets/global-style/_classes.scss";
import addButton from 'assets/images/add-button.svg';
import TaskCard from 'components/tasks/TaskCard/TaskCard';
import TaskAddForm from 'components/tasks/TaskAddForm/TaskAddForm';
import "assets/global-style/_classes.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, selectTasks } from "store/tasksSlice";


const TodayPlansPage = () => {
    const [tasksList, setTasksList] = useState([]);
    const [isAddFormDisplayed, setIsAddFormDisplayed] = useState(false);
    const dispatch = useDispatch();
    const selectorTasks = useSelector(selectTasks);

    function handleAddClickButtonClick(e) {
        e.preventDefault();
        setIsAddFormDisplayed(true)
    }

    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    useEffect(() => {
        if (selectorTasks.tasksList.length) {
            setTasksList(selectorTasks.tasksList);
        }
    }, [selectorTasks]);

    function htmlTasksList() {
        return tasksList.map((task, index) => 
        <li key={index}>
            <TaskCard 
                title={task.title}
                summary={task.summary}
                createdAt={task.createdAt}
                duration={task.duration}
            />
        </li>
    );
    }

    return (
        <section className="today-plans-page">
            <section className="today-plans-page__list">
                <div className="today-plans-page__list__header">
                    <h1 className="heading">Today's Plans</h1>
                    <button 
                        className="button--no-fill--no-border"
                        onClick={(e) => handleAddClickButtonClick(e)}
                    >
                        <img src={ addButton } alt="" />
                    </button>
                </div>
            </section>

            <ul className="ul today-plans-page__list">
                { htmlTasksList() }
            </ul>

            <TaskAddForm 
                isDisplayed={isAddFormDisplayed}
                handleCloseButtonClick={() => setIsAddFormDisplayed(false)} 
            />
        </section>
    );
}

export default TodayPlansPage;