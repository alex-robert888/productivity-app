import React, { useEffect, useState } from "react";
import "./TodayPlansPage.scss";
import "assets/global-style/_classes.scss";
import addButton from 'assets/images/add-button.svg';
import TaskCard from 'components/tasks/TaskCard/TaskCard';
import TaskAddForm from 'components/tasks/TaskAddForm/TaskAddForm';
import "assets/global-style/_classes.scss"


const TodayPlansPage = () => {
    const tasksList = [
        {
            title: "Do the groceries",
            summary: "Ask mom about what kind of bread to   buy",
            createdAt: "2021-01-30",
            duration: "60",
            checked: true
        },
        {
            title: "Go to the gym",
            summary: "",
            createdAt: "2021-01-30  ",
            duration: "45",
            checked: false
        }
    ];
    const htmlTasksList = tasksList.map((task, index) => 
        <li key={index}>
            <TaskCard 
                title={task.title}
                summary={task.summary}
                createdAt={task.createdAt}
                duration={task.duration}
            />
        </li>
    );

    const [isAddFormDisplayed, setIsAddFormDisplayed] = useState(false);

    function handleAddClickButtonClick(e) {
        e.preventDefault();
        setIsAddFormDisplayed(true)
    }

    useEffect(() => {
        console.log(isAddFormDisplayed);
    }, [isAddFormDisplayed])

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
                { htmlTasksList }
            </ul>

            <TaskAddForm 
                isDisplayed={isAddFormDisplayed}
                handleCloseButtonClick={() => setIsAddFormDisplayed(false)} 
            />
        </section>
    );
}

export default TodayPlansPage;