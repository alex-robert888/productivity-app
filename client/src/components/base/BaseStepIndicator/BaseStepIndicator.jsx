import React from "react";
import "./BaseStepIndicator.scss";
import "../../../assets/global-style/_classes.scss";
import variables from "../../../assets/global-style/_variables.scss";

const BaseStepIndicator = ({numberOfSteps, currentStep}) => {
    const listItems = [...Array(numberOfSteps).keys()].map(step => {
        return <li key={step} style={{background: step === currentStep ? '#612CF1' : 'none'}}></li>
    });
    
    return (
        <article className="base-step-indicator">
            <ul className="ul">
                {listItems}
            </ul>
        </article>
    );
}

export default BaseStepIndicator;   