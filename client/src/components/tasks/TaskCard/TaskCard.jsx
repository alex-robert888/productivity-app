import React from "react";
import "./TaskCard.scss";

const TaskCard = ({title, summary, createdAt, duration}) => {
    return (
        <article className="task-card">
            <input type="checkbox"/>
            <p>{title}</p>
        </article>
    );
}

export default TaskCard;