import React, { useState } from "react";
import "./TodayPlansPage.scss";

const TodayPlansPage = () => {
    const [tasksList, setTasksList] = useState([
        {
            title: "Do the groceries",
            summary: "Ask mom about what kind of bread to buy",
            createdAt: "2021-01-30",
            duration: "60"
        },
        {
            title: "Go to the gym",
            summary: "",
            createdAt: "2021-01-30  ",
            duration: "45"
        }
    ]);
    
    return (
        <section className="today-plans-page">
            <section className="today-plans-page__list">
                <div className="today-plans-page__list__header">

                </div>
            </section>
        </section>
    );
}

export default TodayPlansPage;